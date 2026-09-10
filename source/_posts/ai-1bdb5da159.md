---
title: "IETF Publishes RFC 10008, Adding the QUERY Method for Safe Requests With a Body"
date: 2026-09-11 07:34:04
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "The biggest addition to HTTP in sixteen years arrived in June 2026, when the IETF published RFC 1000"
source_url: "https://www.infoq.com/news/2026/09/http-query-method/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-10T06:27:00.000Z　|　采集：2026-09-11 07:34:04

## 正文

The biggest addition to HTTP in sixteen years arrived in June 2026, when the IETF published [RFC 10008](https://www.rfc-editor.org/info/rfc10008/) and gave the web a new method called QUERY. It is the first new standard HTTP verb since PATCH landed in 2010, and it was authored by Julian Reschke, James Snell and Mike Bishop after a conversation that Asbjørn Ulsberg reopened at the 2019 HTTP Workshop.

QUERY exists to settle an argument developers have been having for years. A [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) is safe and idempotent, but its filters have to live in the URL, where they hit length limits, leak into access logs and struggle to express nested structures. A POST can carry a rich body, but it is neither safe nor idempotent, so caches skip it, clients cannot safely retry it, and intermediaries must assume it changes state. QUERY is the missing third option, a request that carries a body like POST while keeping the safe, idempotent and cacheable semantics of a read.

In practice a search that once had to be squeezed into a URL:

```
GET /orders?select=email&limit=10&match="email=*@example.*"
```

can instead send its filter in the body, where size is not a concern:

```
QUERY /orders HTTP/1.1
Host: api.example.org
Content-Type: application/json
{ "select": ["email"], "limit": 10, "match": "email=*@example.*" }
```

Responses stay cacheable as long as the cache key incorporates the request content, and servers can advertise support through the new Accept-Query field.

A [r/webdev thread](https://www.reddit.com/r/webdev/comments/1u82ghz/new_query_method_is_about_to_join_get_post_put/) drew more than 800 upvotes, where one developer asked:

> Why not allow an optional [request body in GET](https://www.reddit.com/search/?q=HTTP+request+body+in+GET&cId=0ce327d0-619c-44c8-9359-5a8b8ed6997e&iId=1d1859c2-d726-4f49-b0c9-453dbf8f283e)?

Another developer explained why:

> By having a new method you ensure the party supports the body.
> 
> Debugging why your request doesn't work is way easier. Because the server that does not support this method will say "QUERY not supported"
> 
> Failing silently is the most obvious to deal with a body on GET. Good luck debugging which server down the line dropped your body...

On [Hacker News](https://news.ycombinator.com/item?id=48640974), similar conversations around using GET and optional body, one commenter summed up the discussion:

> QUERY is just GET"  
> "Using GET with a Body works"
> 
> Seems like this is going everyone's head. You're not supposed to use GET with a Body, this is a hack, therefore having an explicit method makes sense.
> 
> Just because it works, doesn't mean its the right way

The same thread pointed out that even Cloudflare fakes a GET cache key to cache POSTs today:

> …Their unofficial support for caching POST requests is to create a fake GET request to serve as cache key and use that to cache the response. This is the kind of hacks everyone is forced to go through instead of using something like QUERY

[GraphQL](https://graphql.org/) and [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html) already tunnel complex reads through POST bodies, and QUERY offers a standards-based alternative that keeps those reads cacheable. Tooling is catching up, with support merged into the Rust [http crate](https://github.com/hyperium/http/pull/798) and tracked across [.NET](https://github.com/dotnet/aspnetcore/issues/61089), [Axum](https://github.com/tokio-rs/axum/issues/3799), [Quarkus](https://github.com/quarkusio/quarkus/issues/55494) and [Bruno](https://github.com/usebruno/bruno/issues/8589).

The [specification](https://datatracker.ietf.org/doc/rfc10008/) advises treating it as additive rather than a wholesale replacement. The [IETF draft history](https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/) records the long path from the earlier safe-method-with-a-body work to the standard shipping today, a reminder that, like PATCH before it, real adoption will likely be measured in years.

HTTP is the request and response protocol the web runs on, and its specifications are developed by the IETF's HTTP Working Group, known as httpbis, then published as RFCs by the RFC Editor. New methods are rare because each one has to be understood by clients, servers, proxies and caches before it becomes dependable in practice, which is why RFC 10008 positions QUERY as an optional addition alongside GET and POST rather than a replacement for either.

## About the Author

#### **Daniel Curtis**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/09/http-query-method/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。