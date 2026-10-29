---
title: "Article: Building an Offline-First AI Coding Tutor for Low-End Android Phones"
date: 2026-10-29 09:25:01
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Key Takeaways - On low-end devices in low-bandwidth markets, a full storage volume is a normal opera"
source_url: "https://www.infoq.com/articles/building-offline-first-android-app-low-end-devices/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-10-28T09:00:00.000Z　|　采集：2026-10-29 09:25:01

## 正文

### Key Takeaways

-   On low-end devices in low-bandwidth markets, a full storage volume is a normal operating condition rather than an edge case, so any `await` on a cache or database write inside a critical render path is a latent blank screen and should be treated as a non-fatal degradation instead.
-   `localStorage` is the wrong persistence layer for any cache that scales with content or locale, because its roughly 5MB ceiling and synchronous API impose the heaviest cost on precisely the underpowered devices you are trying to serve, while IndexedDB with a dual-read migration window lets you move without stranding existing users.
-   WebAssembly runtimes such as Pyodide and sql.js make server-free code execution viable on smartphones, but only if you defer initialisation into a Web Worker and treat cold-start cost as a first-class UX problem rather than a benchmark footnote.
-   AI features that depend on a hosted endpoint should be designed with an explicit degradation contract, which includes a defined second tier, a defined timeout, persisted session state across the switch, and feedback formats that stay useful when the weaker model answers.
-   Discoverability and usability are different properties, and a feature placed outside a user's working line of sight is functionally a feature that does not exist.

I spent a year watching students disappear. I was running an academy where they would join a live class, participate actively, and then vanish mid-session. When I followed up, almost none of them had chosen to leave. Their connections could not hold long enough to finish a lesson. Out of one cohort of 80 enrolled students, 6 graduated.

That experience exposed four assumptions underneath most coding education platforms, so normalised they barely register as assumptions: the learner has a laptop, the learner has broadband, the learner reads English comfortably, and the learner can pay for a subscription or belongs to an institution that already has.

The platform I built, [Efiwe](https://efiwe.com/), inverts every one of those assumptions. It runs in a smartphone browser, works offline after a single setup, executes learner-submitted code locally, and does not require a data bundle after the initial load. It has been used by more than 22,000 learners across 160 countries, and it has been deployed in structured school pilots in Lagos and Ogun State in Nigeria, and in Uttarakhand, India.

#### Related Sponsors

-   ##### [AI Security Playbook: Move Faster with AI, Without Compromising Security](https://www.infoq.com/url/f/881be758-782e-4f22-9af7-5e9b79ae9b39/)
    

This article is not about pedagogy. It is about engineering, and specifically about the parts that broke. The interesting problems in this space are not model quality. They are storage, quota, cold start, and failure-path design. Those problems generalise well beyond education, to any product whose users are on constrained devices and intermittent connections.

## Why a PWA and not a native app

The first decision was distribution. A native Android app is the obvious route, yet we did not take it for three reasons.

First, install friction. An APK from a store is tens of megabytes before any content is available, consuming a data bundle that the learner may be rationing. A progressive web app lets a learner start on the first tap and pay the caching cost incrementally, in the background, while they are already learning.

Second, update cadence. We ship changes continuously. A service worker update propagates on the next visit. A store release does not, and in markets where users defer app updates to save data, a store release can leave a long tail of clients running code you fixed months ago.

Third, the web platform gave us a single runtime for code execution. We needed learners to write Python, SQL, JavaScript and HTML and see results immediately, without a server. WebAssembly in the browser gave us that on every platform at once.

A native shell wrapping a WebView would have given us the same execution model, and we considered it. Loading remote content, it would also have solved the update problem. What it would not have solved is install friction: the APK is still a download before any learning happens, on a data bundle the learner may be rationing. For a product whose entire premise is removing barriers to starting, that was enough to decide it.

The cost of this choice is that we inherit the browser's storage model, including its quota behaviour, and that is where most of our production pain has come from.

## Executing code without a server

Grading a coding challenge normally means shipping the submission to a server, running it in a sandbox, and returning a verdict. That model requires a round trip per attempt. In a classroom in Ijebu-Ode, Nigeria, with unreliable connectivity and learners who attempt a challenge ten or twelve times before solving it, that model is unusable.

So execution happens on the device. For SQL we use sql.js, which is SQLite compiled to WebAssembly. For Python we use Pyodide, which is CPython compiled to WebAssembly. Both are large, both are slow to initialise, and both will freeze the main thread if you let them.

The rule we settled on is that no runtime initialises on the main thread and no runtime initialises before it is needed. Course selection triggers a lazy worker spin-up, and the first paint of the challenge screen never waits on it. This is exemplified in the following snippet:

```
// runtime-host.js (main thread)
let workerPromise = null;
export function getRuntime(kind) {
  if (!workerPromise) {
    workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker('/workers/runtime.js', { type: 'module' });
      const timer = setTimeout(
        () => reject(new Error('runtime-init-timeout')),
        45_000
      );
      worker.addEventListener('message', function onReady(e) {
        if (e.data?.type !== 'ready') return;
        clearTimeout(timer);
        worker.removeEventListener('message', onReady);
        resolve(worker);
      });
      worker.postMessage({ type: 'init', kind });
    });
  }
  return workerPromise;
}
```

Inside the worker, initialisation is guarded so a second init message is a no-op, and the module payload is fetched from the cache first so that a repeat session on a device that has been offline for a week still starts.

```
// workers/runtime.js
let runtime = null;
self.addEventListener('message', async (e) => {
  const { type, kind, code, fixture } = e.data;
  if (type === 'init') {
    if (!runtime) runtime = await boot(kind);
    self.postMessage({ type: 'ready' });
    return;
  }
  if (type === 'run') {
    try {
      const result = await runtime.exec(code, fixture);
      self.postMessage({ type: 'result', result });
    } catch (err) {
      // A learner error is data, not an exception. Never let it kill the worker.
      self.postMessage({ type: 'result', error: String(err?.message ?? err) });
    }
  }
});
```

The distinction in that last block is worth dwelling on. In a normal application, a thrown exception from executed code is a bug. Here it is the expected case most of the time, because the learner is a beginner and the entire point is that they will get it wrong. Every layer of the execution path has to treat failure as ordinary traffic.

For SQL grading we do not compare output strings. We compare result shape and content, which lets a learner write a correct query with different formatting, aliasing or column ordering and still pass where the challenge permits it.

```
export function gradeSql(actual, expected, opts = {}) {
  if (!actual || !actual.length) return { 
    pass: false, reason: 'empty' 
  };
  const [got] = actual;
  const cols = got.columns.map((c) => c.toLowerCase());
  const want = expected.columns.map((c) => c.toLowerCase());
  if (!opts.orderedColumns) {
    cols.sort();
    want.sort();
  }
  if (cols.join('|') !== want.join('|')) {
    return { pass: false, reason: 'columns', got: cols, want };
  }
  const norm = (rows) =>
    rows.map((r) =>
      r.map(String).join('\u0001')).sort().join('\u0002');
  const rowsMatch = opts.orderMatters
    ? JSON.stringify(got.values) === JSON.stringify(expected.values)
    : norm(got.values) === norm(expected.values);
  return rowsMatch ? { pass: true } : { pass: false, reason: 'rows' };
}
```

The `reason` field is not decoration. It is the input to the feedback system described later, and it lets us tell a learner that their columns are right but their filter is wrong, rather than telling them only that they failed.

## The persistence layer, and why localStorage ran out

Efiwe presents content in 246 languages. Translated challenge text is cached on the device so that a learner who selected Yoruba or Hindi does not re-fetch the same strings on every session, and so that translation survives going offline.

We started that cache in localStorage. It was the wrong choice and it failed in two ways at once.

The first failure is capacity. localStorage is typically capped at around 5MB per origin, though the exact limit varies by browser and platform. Cached translated content for a multi-hundred-challenge course in even a handful of languages exceeds that. When it does, writes throw `QuotaExceededError`, and if you have not wrapped every write, that throw lands somewhere unhelpful.

The second failure is worse and quieter. localStorage is synchronous. Every read and every write blocks the main thread. On a mid-range laptop that is a few milliseconds nobody notices. On an entry-level Android device with a slow flash controller and a saturated CPU, a large synchronous read at startup is a visible stall on exactly the hardware that can least afford one. We had optimised our JavaScript payload carefully and then hidden a main-thread block inside the storage layer.

We moved to IndexedDB. IndexedDB is asynchronous, its quota is a percentage of available disk rather than a fixed few megabytes, and it stores structured values without a JSON round trip.

Choosing IndexedDB was the easy part. Moving existing users onto it without losing their data was the problem that actually took the work. We had live users holding data in the old store, many of them offline for days at a stretch and therefore reaching the new code at unpredictable times. A hard cutover would have silently discarded their cached translations and their in-progress state. Instead we ran a dual-read window: read the new store first, fall back to the legacy store once, promote whatever we find, and delete the legacy key.

```
import { get as idbGet, set as idbSet } from './idb.js';
const LEGACY_PREFIX = 'efiwe.tr.';
export async function readTranslation(key) {
  const fresh = await idbGet('translations', key);
  if (fresh !== undefined) return fresh;
  // One-time promotion from the legacy synchronous store.
  let legacy = null;
  try {
    const raw = localStorage.getItem(LEGACY_PREFIX + key);
    legacy = raw ? JSON.parse(raw) : null;
  } catch {
    legacy = null; // corrupt or unreadable, treat as absent
  }
  if (legacy === null) return undefined;
  try {
    await idbSet('translations', key, legacy);
    localStorage.removeItem(LEGACY_PREFIX + key);
  } catch {
    // Promotion is best-effort. Serving the value matters more than moving it.
  }
  return legacy;
}
```

Two details in that function are the whole lesson. The legacy read is wrapped, because a partially written localStorage value from an interrupted session will throw on `JSON.parse` and you do not want a parse error on a cache to take down a page. And the promotion write is wrapped separately, because the write can fail on a full device while the read succeeded, and in that case the correct behaviour is to hand the learner their content anyway and try again next time.

## Storage quota as a first-class failure mode

This is the incident I would most want another engineer to learn from this article.

During the Nigerian pilot, an educator reported that on some students' phones the learning page did not display after account creation. The account was created, the login succeeded, and then the course simply did not appear. Blank.

Our first hypothesis was hardware compatibility at the low end of the Android range. It was a reasonable guess but it was wrong, and we lost time on it because the reports clustered on cheaper devices. They clustered there for a correlated reason rather than a causal one: cheaper devices have smaller storage, and smaller storage fills up.

The root cause was a single `await` in the course startup sequence. On boot, we persisted an initial course manifest to the cache and then continued. On a device with no free space, that write could be rejected. The rejection was not caught, which made the promise chain halt before the render call. No error surfaced to the learner because nothing had crashed in a way the UI could detect. The course was simply never asked to draw itself.

Here is the shape of the original code:

```
// Before: a storage failure silently halts the render path.
async function startCourse(courseId) {
  const manifest = await fetchManifest(courseId);
  await cacheManifest(courseId, manifest); // rejects on a full device
  renderCourse(manifest);                  // never reached
}
```

And the fix:

```
// After: persistence is an optimisation, not a precondition.
async function startCourse(courseId) {
  const manifest = await fetchManifest(courseId);
  cacheManifest(courseId, manifest).catch((err) => {
    reportNonFatal('manifest-cache-failed', err);
    setOfflineAvailability(courseId, false);
  });
  renderCourse(manifest);
}
```

The course now starts normally even when it cannot save data to the device. Offline availability is degraded and the learner is told so, but learning is not blocked. We verified the fix across a matrix of storage conditions, including a device deliberately filled up to its capacity, before closing it. The whole cycle from report to verified fix ran within the same day.

The generalisable rule we adopted afterwards: **persistence calls in a startup path are fire-and-forget with an explicit catch, never awaited**. If your render depends on a successful write, your users' full phones are a blank screen waiting to happen.

We also added a preflight so that we can degrade deliberately rather than discover the problem at write time.

```
export async function storageBudget() {
  if (!navigator.storage?.estimate) {
    return { known: false, freeBytes: Infinity };
  }
  const { quota = 0, usage = 0 } = await navigator.storage.estimate();
  return { known: true, freeBytes: Math.max(0, quota - usage), quota, usage };
}
export async function canCacheCourse(estimatedBytes) {
  const { known, freeBytes } = await storageBudget();
  if (!known) return true;            // unknown is not a reason to block
  return freeBytes > estimatedBytes * 1.25; // headroom for overhead
}
```

`navigator.storage.estimate()` returns padded and approximate values by design, for privacy reasons, so it is a planning signal and not a guarantee. It is enough to decide whether to attempt a full course precache or to fetch lazily, and it is enough to tell a learner in advance that they should free space if they want offline mode.

## Two-tier AI feedback and an honest degradation contract

Efiwe gives every learner personalised feedback on wrong answers. That is the feature that our field data rated highest, at 4.3 out of 5 across the Nigerian pilot, with nine of ten educators scoring it 4 or 5.

It is also the feature most at odds with the offline premise, because the strongest feedback comes from a hosted model behind an API, and the whole point of the product is that the network is not there.

We resolved this with two tiers and an explicit contract between them. Tier one is the hosted model, used when connectivity is available and within a hard timeout. Tier two is a smaller on-device path that combines deterministic analysis of the submission with a local model. Tier two is always available and always correct about facts, because the deterministic part does the factual work.

```
const HOSTED_TIMEOUT_MS = 4000;
export async function getFeedback(submission, challenge) {
  const local = analyseLocally(submission, challenge); // always runs, always cheap
  if (!navigator.onLine) return { ...local, tier: 'device' };
  try {
    const hosted = await withTimeout(
      requestHostedFeedback(submission, challenge, local),
      HOSTED_TIMEOUT_MS
    );
    return { ...hosted, tier: 'hosted' };
  } catch {
    return { ...local, tier: 'device' };
  }
}
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
  ]);
}
```

Three design points here that took us longer to learn than they should have.

The local analysis runs first and unconditionally, not as a fallback. It is cheap, it is deterministic, and it is also passed as context into the hosted request. This means the hosted model is reasoning about a pre-diagnosed submission rather than starting from scratch, which produces more consistent output and a smaller prompt.

`navigator.onLine` is checked but never trusted. It reports whether a network interface exists, not whether anything is reachable, and on a phone attached to a captive portal or a stalled mobile connection it will happily report true. It is used as a fast negative signal only. The timeout is what actually protects the learner.

And the tier is recorded on the response. We do not hide which path gave an answer. That matters for our own telemetry, and it matters because feedback that arrives from the weaker tier is written differently.

## Making feedback pedagogically useful

Our early feedback was binary and flat. A learner who submitted `consolee.log("hi")` and a learner who had fundamentally misunderstood what a function is both received a variant of "this is wrong, it should be this instead."

An educator in the pilot flagged this precisely. Her students were receiving corrections they could not act on without her sitting beside them, which defeats the point of a tutor that scales.

The fix was to measure how close the submission is to correct before deciding what kind of feedback to give. A near-miss gets a character-level nudge. A structural miss gets a conceptual explanation.

```
export function proximityHint(submitted, expected) {
  const d = levenshtein(submitted, expected);
  if (d === 0) return null;
  if (d > 2 || Math.abs(submitted.length - expected.length) > 2) {
    return null; // not a near-miss; escalate to conceptual feedback
  }
  const diff = firstDivergence(submitted, expected);
  if (diff.kind === 'extra') {
    return `You're almost there. You have an extra "${diff.char}". Remove it and you'll have it.`;
  }
  if (diff.kind === 'missing') {
    return `You're almost there. You're missing the letter "${diff.char}". Add it and you'll have it.`;
  }
  return `You're almost there. Check the character at position ${diff.index + 1}.`;
}
```

The analogy I use internally is two teachers marking the same page. The less experienced one puts a red cross next to the wrong answer and writes the correct one beside it. The more experienced one circles exactly what is wrong and writes a note about the specific thing that needs to change. This change moved our feedback from the first kind of marking to the second, and it is entirely deterministic, which means it works identically offline.

## Multi-user devices are an architectural requirement

In the Nigerian pilot, eight of ten educators cited students not owning a personal device as the dominant obstacle. Phones were shared between siblings, borrowed from teachers, or passed around a group during a session.

Our authentication model at the time assumed one device, one learner. Two students on one phone meant logging out and back in, which on a slow connection is a minute of lost session time each way and, worse, risks a learner losing local progress that had not synced.

Account switching therefore is not a convenience feature, it is a consequence of the deployment context. A device now holds up to twenty saved profiles, and switching is one tap with no full logout. Architecturally this meant namespacing every local store by profile, so that progress, translation cache and runtime state are partitioned rather than global.

```
const scoped = (profileId, store) => `${store}::${profileId}`;
export const progressStore = (profileId) => ({
  get: (k) => idbGet(scoped(profileId, 'progress'), k),
  set: (k, v) => idbSet(scoped(profileId, 'progress'), k, v),
});
```

If you are building for a market where devices are shared, retrofit this early. Unpicking a globally scoped local store after launch is considerably more expensive than namespacing it on day one.

## What the field data changed

Two deployments gave us the evidence base for most of the above. In Uttarakhand, India, four institutions ran the platform with structured, managed device access. In Lagos and Ogun State, both in Nigeria, ten educators across ten schools ran it over eight weeks relying almost entirely on students' personal phones.

The contrast isolated platform problems from context problems, which is the single most useful thing a pilot can do for an engineering roadmap. Offline reliability scored 4.0 out of 5 in Nigeria, and every low score traced to the same condition: connectivity dropped before the first caching cycle completed. That is not a reliability failure, it is a first-run sequencing failure, and it is fixable in code by prioritising the minimum viable offline payload ahead of everything optional. Device access, by contrast, is not fixable in code at all, and pretending otherwise wastes engineering time.

The finding that stung most was about language. Supporting 246 languages was one of the reasons the platform exists. In the pilot, four of ten educators never tried a local-language interface, and one tried and could not work out how. Every one of them had been shown the feature in onboarding.

The button was in the page footer. A learner moving through challenges has no reason ever to scroll to a footer. The feature was present, documented and demonstrated, and it was functionally invisible.

Discoverability and usability are not the same property. A feature that requires a user to already know where to look is, for most users, a feature that does not exist. We are moving the control into the active learning line of sight, but the more valuable outcome is the check we now run before shipping anything: not "can a user find this if told where it is" but "will a user encounter this in the path they actually walk."

## Open problems

Three things remain unsolved and I would rather say so than write a tidy ending.

Cold start on WebAssembly runtimes is still worse than I want on the weakest devices, and streaming compilation only partly helps when the module has to come from cache rather than the network.

On-device model quality is the real ceiling on offline feedback. Deterministic analysis carries more of the load than I would like, and it does well only because coding challenges have checkable answers. A softer domain would not have that fallback.

Storage remains adversarial. Quota is padded, eviction is opaque, and `persist()` is granted inconsistently across browsers. The defensive posture described here is a workaround for a platform gap, not a solution to it.

None of these are reasons not to build this way. The alternative, which is assuming a laptop and broadband, excludes the majority of the people who would benefit. The engineering is harder, but the addressable population is several billion larger.

## About the Author

#### **Chidi Nwaogu**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/articles/building-offline-first-android-app-low-end-devices/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。