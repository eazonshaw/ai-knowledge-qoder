---
title: "Presentation: Spritely: Infrastructure for the Future of the Internet"
date: 2026-09-26 08:16:24
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Transcript Christine Lemmer-Webber: This is indeed Spritely, an infrastructure for the future of the"
source_url: "https://www.infoq.com/presentations/spritely-decentralized-architecture/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-25T11:00:00.000Z　|　采集：2026-09-26 08:16:24

## 正文

## Transcript

**Christine Lemmer-Webber:** This is indeed Spritely, an infrastructure for the future of the internet. Who are we? I'm Christine Lemmer-Webber, Executive Director of the Spritely Institute.

**David Thompson:** I'm David Thompson, CTO at Spritely.

**Christine Lemmer-Webber:** We are a research institution for the future of the internet. We figure out the stuff so that the rest of us can have a good time online. That's what we do. We're very focused on user freedom and advancing what are human-oriented technologies. We have some previous successes from people working at our organization. Who here has ever heard of Mastodon? It's a decentralized social network thing. They happen to use a protocol that I co-authored to connect together their websites. That's gotten out to a significant number of people. We have background in building standards and building technology. Jessica Tallon and I worked on that. It's not done. We've got lots more we need to do to make the internet a better place. Spritely takes a whimsical approach to building the future of the internet. We have lots of little projects and we represent them by cute, adorable monsters. It's a choice, and it's a choice that I endorse as Executive Director of the organization. We have all these different pieces, but it turns out that that matters, actually. There's a lot that we can do to be able to make the internet a lot a better place.

## Centralized Tech

What could go wrong? The internet's great. It's perfect. We have everything as it is. Centralized technology never lets us down. What could go wrong with that? What could go wrong with building distributed systems? They're the easiest thing in the world to build. What could go wrong with our legislative environment? Lawmakers always understand technology. We know this as technologists. Laws never turn against us. Maybe actually there's things to worry about with all of those. Maybe we should build resilient applications that address all of these points. We're going to talk about how to be able to do that. Talking about centralized technology, I'm sure you've had this happen before. I've had it happen before. There's some new piece of tech that comes out. You're really excited about it. They've raised a bunch of VC money. You're like, yes, and everything's great. Everybody who works there is happy.

The users are happy and everything. Eventually things get really bad. This is not a coincidence. A lot of this is socioeconomic. The money comes in, and it's great, and nobody's worrying about it. Then eventually the investors are like, so when's that money coming back? Then that's when the enshitification knobs start turning on. Services even go away. Who here ever used Google Reader, or liked it, or knows somebody who did? There are things that you can rely on, and there's no guarantee they're going to stick around. The problem with centralization also is that it's very easy to backdoor a centralized system, and users often have very little choice or recourse about what to do about it and may not even be aware that it's happening. Another problem is legislative moats. Sometimes we're like, actually maybe Facebook's bad, it turns out, or maybe these algorithmic systems that are pushing for engagement farming actually hurt people, hurt our kids, hurt our lives.

Let's try to punish the big players. Governments are like, let's try to create these laws to be able to punish them. What they actually end up doing unintentionally is creating something called a legislative moat. It creates a legislative thing that's designed to punish the big players, but it actually creates a legislative environment that only the big players are capable of playing with. This is a really dangerous situation, especially if you want to self-host independent projects and stuff like that. It can lock out smaller players and solutions.

Maybe you've heard about some of this type of stuff happening recently. If I ask who here has heard of Discord. That's probably 100%. One of the interesting things about Discord is that, like us, they have a certain amount of attachment to whimsy, and there's also an attachment to fun, in that it was originally really built for use with games. All sorts of communities rely on Discord these days, and they can be put at threat if Discord decides to do something bad, chooses to cooperate with organizations that surveils them, or surveils them themselves, or if something bad happens, like maybe like teaming up with a Peter Thiel-backed organization that could really backdoor our lives in terms of these age verification things. If you're not concerned about age verification, then you should be, because it's a threat in terms of inserting backdoors into our operating systems and all sorts of things.

It's very hard to be able to push back against this, even though a number of the people pushing for it have good motivations. We can do better, actually. We can solve a lot of the problems of centralization. We can do it. We can bring encryption in. We can do federation between different components. We can do local-first tech. We had a great keynote from Martin. It all feels very uphill. Sometimes there are systems that actually build and encapsulate solutions and can make a big difference, but the solutions that they build may actually capture certain values. One of the things I think is interesting about the Ruby on Rails website is you go there and it says Ruby on Rails scales from HELLO WORLD to IPO. For instance, Mastodon, which is something which implements ActivityPub, is built on top of Ruby on Rails. Ruby on Rails is designed to scale from HELLO WORLD to IPO, and it encodes some of those values in the process.

What happens when you're trying to build a decentralized network application where it's building on top of an ecosystem that assumes that you're doing DevOps, that you have a DevOps team, a group of dedicated engineers. Now you want to ask individuals to self-host this. The technology that we end up building upon can encode the values of the purposes that it's actually built within. What are we going to do?

## Decentralization

Why is decentralization so hard? What's going on? What can we do? You're CTO of the Spritely Institute. You've got to solve this for us.

**David Thompson:** Having a single source of truth, it's simple, but it's both fragile and capturable, as Christine's been explaining. If we remove the central leader, remove the central server, great, it sounds wonderful. It brings both resilience and user agency. Users can walk away, go somewhere else. As engineers, we have to face the inherent complexity that we add to such an architecture. We have to find a way to deal with it and manage it to build something else. Simply put, centralization's easier technically than decentralization.

**Christine Lemmer-Webber:** Concurrency is hard. Why is it hard? You're CTO, you've got to solve this for us.

**David Thompson:** Of course, it's hard. We have to deal with deadlocks. We have to deal with things like shared mutable state, message ordering in a distributed system, incredibly hard things to solve.

**Christine Lemmer-Webber:** Synchronization's also hard.

**David Thompson:** Yes, of course. Consensus algorithm, Paxos, whatever, eventual consistency, are we talking CRDTs? I don't know. Then fault tolerance, all these things. If you have a bunch of different components and one of them fails, what do you do?

**Christine Lemmer-Webber:** Infrastructure's also hard.

**David Thompson:** Yes, of course. Like with Rails and other things, there's lots of tools out there to build client-server, web 2.0 style applications to build Software as a Service, all of these things. The tech industry at large is focused on the business needs of centralization. However, as is very clear coming to a conference like QCon and hearing people from various companies speak, every platform is a distributed system behind the scenes these days. What they present is a centralized service to its users. What they've done is they have a distributed system that the engineers work on, but it's the power that's centralized in those systems. We don't get the benefits of that decentralization. They do in terms of how the business operates.

**Christine Lemmer-Webber:** Assembling the pieces is also hard.

**David Thompson:** That's right. Again, going back to Rails. Rails gives you a turnkey solution, you just use Rails and you can build REST APIs and all these things. It's easy. You don't have to be an expert to get started with it. If you want to build something decentralized, you want to build a distributed system, now you've got to know about network security. Now you've got to know what kind of cryptographic algorithms you'd like to use. You need to actually know things like programming language theory, because a lot of the predominant programming paradigms aren't such a good fit in this context, and on and on. Really, there's too many research papers to read and there's just not enough time. You can't expect decentralization to take off if everyone has to start from first principles and catch up on decades of research. Decentralization, or ideally take decentralization to its extreme, peer-to-peer, just hasn't had its Rails moment.

It's not easy to start as a beginner. There are no sane defaults to start with. There's nothing equivalent to Rails' convention over configuration model or something like that. We love decentralization. If we want this to succeed, we need to put it in the hands of engineers without making them learn all of these things from first principles. Really, where is the Rails of P2P? Fortunately, we work at Spritely.

**Christine Lemmer-Webber:** We're supposed to figure it out. I'm telling you, you've got to solve these problems for us. How do we do it?

**David Thompson:** One, we have a belief that decentralized and secure should be the default way that we can build applications in the future. How do we do that? Hand wave.

**Christine Lemmer-Webber:** Just hand waving?

**David Thompson:** No, it turns out it's very complicated. To answer that question, I want to take a closer look at three separate questions that I think will reveal some of the paradigms and modes of thought that we can use to solve these problems. One, how do we protect resources in a decentralized system? Basically, how do we do access control? How do these processes talk to each other? How do different machines communicate? Third, how do we name things? I think maybe we don't think about naming so much, but naming becomes a serious concern. You may think that there's well established means of dealing with all of these things. We would like to show what we think is even better. Or rather, we want to show the problems of typical solutions and how based upon our research and the research of decades prior, the shoulders upon which we stand, what we can do instead.

## Access Control - Capabilities

**Christine Lemmer-Webber:** We've got a decentralized system. How do we keep it safe? How do we protect resources? We've got this big open peer-to-peer world. We have to make it safe.

**David Thompson:** We have role-based access control. AWS has IAM. Problem solved, I think. First, let's start with a guiding principle, the principle of least authority, which states that an entity, a machine, a process, what have you, should have just enough privilege to perform its task. It should have no more. In other words, if something were to be exploited about that, the blast radius should be minimal because its privilege is contained and minimal. When we talk about things like AWS IAM role-based access control, this is the access control list model. It turns out it has a number of serious problems. First of all, user group-based privilege management is very coarse-grained. It's not in the spirit of the principle of least authority. It's very hard to make a system where the users and groups have very constrained roles. Inevitably, these things grow, or you have an unmanageable set of users and groups, and it's very hard to maintain.

Also, granting privilege to someone in such a system, it requires the centralization of authority. There's always an admin team that you have to go through in order to grant privilege. If I have access to a database and I want to grant Christine read-only access, but I'm not an administrator, I can't give Christine that authority. It's because there's no safe way to delegate in an ACL system. There is delegation in an ACL system. People share their Netflix username and password all the time with people. There's no safety in that, and there's no auditing, and there's no means of holding people accountable if they misuse privilege. For further information on this, there's a really great paper out there called ACLs don't, that goes in-depth about these problems.

Let's take a quick look at a little thing called ambient authority.

**Christine Lemmer-Webber:** I've got this wonderful program. It's a really cool game. It's called Solitaire. I've got the solitaire.exe. I'm going to shoot it to you over email. I want you to double-click and open that up for me?

**David Thompson:** I'm a little scared.

**Christine Lemmer-Webber:** What? Why? This should be safe. This should be fine.

**David Thompson:** When I double-click solitaire.exe, I'm worried about it. When I double-click it, that's executing as my user. It has access to everything my user has access to. It can read my SSH keys. It can read my browser history. Who knows what it can do? I don't necessarily trust it. This is ambient authority. This is what our programs and our operating systems today run with. They run all the privilege of the user that launches them.

**Christine Lemmer-Webber:** It's running as you. This is dangerous. Can we do better?

**David Thompson:** Yes, we can. Let's first talk about an additional problem. Who here has heard of the confused deputy problem? It's when one entity is tricked into misusing its authority by another. It turns out there's a very common scenario for this that probably more people are familiar with. Who's familiar with cross-site request forgery? Anyone that has a web service needs to deal with this. All the web frameworks just handle it automatically. The request forgery is when a user is tricked into submitting a malicious request using their authenticated session that they have with the web server.

**Christine Lemmer-Webber:** The user doesn't even have to be the user itself, since the browser is running as the user, it has the authority of the user.

**David Thompson:** The popular mitigation for this is to say when submitting a form, there's a hidden form field. That hidden form field has some unguessable token that the attacker would not have access to. Thus, the web server can use that token and match against it, so when the form is submitted, if the token is there, the request is valid. If it's not there, it's rejected. That's how we mitigate CSRF. Those unguessable tokens, that's an interesting idea that actually resembles an alternative security model to ACLs. That model is the capability security model. Capabilities are unforgeable references to resources. They combine both designation and authorization, which in short is to say, if you don't have it, you can't use it. I don't have my car keys with me, but if I wanted Christine to be able to drive my car, I could hand Christine the key and she could drive the car.

**Christine Lemmer-Webber:** It's not going to scan my face?

**David Thompson:** No, there's no facial recognition on the car. It's not that the car lets me drive it, it lets the holder of the key drive it. This act of combining the identity of something with this authorization just means that if you don't have it, you can't use it. Let's revisit Solitaire.

**Christine Lemmer-Webber:** I'm going to hand you this solitaire.exe. What can you do to make it safe?

**David Thompson:** What can I do to make it safe is by starting Solitaire in an environment in which it has no authority whatsoever.

**Christine Lemmer-Webber:** No, wait, no authority?

**David Thompson:** Yes.

**Christine Lemmer-Webber:** No authority means, it's just going to return a value. This is just a function. It's just going to like add 2 plus 2, give me 4. We got to write to the screen. We got to take some input.

**David Thompson:** Pure functional programming is great, but you need to do I/O at some point. The capability model allows us to pass in explicitly authority to something like, in this case, solitaire.exe. What if we gave Solitaire the capability to write to display and read the keyboard only when its GUI window is active? We can represent that in the capability system. We can invoke Solitaire by passing an argument to it that gives it such authority. Thus, even though I don't trust Solitaire, I've limited the means by which it can be abusive or exploit my system.

**Christine Lemmer-Webber:** Now, wait. Before we move on, I just wanted to reiterate something here. You said something interesting, which is that you can pass the capability forward. I'm used to passing things around in programming languages all the time. Argument passing is familiar to me. Do capability security resemble passing arguments and functions?

**David Thompson:** Yes, it does. Let's review. Here are some of the positive aspects of capabilities in a little bit more detail. One, unlike ACLs, we get fine-grained privileges. I can give someone a capability to have write access to this one file on Wednesdays. That's perfectly fine and manageable. It's a practical means of achieving the principle of least authority. We can delegate the privilege without an administrator. Again, I can hand the car key to Christine and I didn't have to check in with the Ford Motor Company or something to approve that transfer or that delegation. Not only can we delegate, and it's hard with a key metaphor, but I can also reduce the privilege that I delegate. It's hard in the physical world, but that key that I handed to you, maybe it only worked today.

**Christine Lemmer-Webber:** Or maybe I could drive, but only a few miles, or I can't open the glove compartment or something like that.

**David Thompson:** We can reduce the scope of privilege that we delegate. What we can delegate is maximally the privilege we already have, and can be reduced.

**Christine Lemmer-Webber:** If I'm going to use this car key, I've just got access to your car forever. I'm just going to keep driving and there's nothing you can do.

**David Thompson:** If I discovered that Christine was just taking lots of joy rides, and just abusing the privilege I've handed, the other great thing about capabilities is that they're revocable. Hard in the physical world, but again, in the computer, I can flip a switch and now Christine no longer has access to the resource I gave her, and that provides a means of accountability. Through this, we're able to decentralize authority. There's no central server to check in if an operation is ok, yet we can still have a secure system. In fact, we can have a more secure system.

## Goblins - Spritely's Distributed Programming Environment

Spritely has a tool for this. In fact, it's a programming language library. It's called Goblins. It's our secure distributed programming environment. We're going to get into it a little more when we get to the next section, but this is our cute little mascot. The properties of Goblins are that programming with capabilities is argument passing. We're used to calling functions and passing arguments. Now imagine that you can't just reach out to the file system or something and read some file ambiently. If all you had were the arguments given to your function, now you have a capability programming system. It matches the intuitions of programmers, which is great. Through this secure programming becomes the default thing you get. We'll get into this a little bit more later, but it's not only asynchronous, it's concurrent and parallel. You actually can have an efficient system. We can do things like persistence, so we can act like a database. Also, it's transactional, so if things go wrong in the middle of operations, we can actually automatically roll back to a known good state. To demonstrate that we like to show off little games.

**Christine Lemmer-Webber:** When designing Goblins, we said we like to keep things fun and whimsical. This is a space shooter that runs in your terminal. It's an old ASCII art and everything. Not only is that cool, wanted to test out and make sure Goblins is performant. You can see this is running in real time and everything, but every now and then you make a mistake in a game and it explodes. Look, you can move backwards in time. What is unlimited versions of transactionality? It's time travel. Here's a cool thing about this. I designed this as the first program in Goblins to basically just make sure that the ergonomics were good. I programmed the entire video game and I didn't even think about the fact that it had time travel. Then I was like, we have transactionality, I should just show this off. Not a single line of code changed to the video game itself.

It was actually just wiring it up to the UI in about somewhere between half an hour and an hour. It just worked because this actually fell out of Goblins. We're focusing on the transactionality in this shiny example, but this is the general philosophy of Goblins is that the user shouldn't actually have to think too much about how the things are provided to them. This actually carries forward with many of the other aspects of Goblins. For example, like we're going to show off a chat program later. The initial chat program that worked, it was just written entirely in one process. Then when we hooked it up to Goblins' network environment stuff, which we're going to talk about, it automatically worked over the network.

## Communication - Actors

**David Thompson:** How do processes talk to each other? It's easy. We have REST, we have RPC and stuff. Solve problem. Let's unpack it a little bit. We need to talk not only about networking protocols, we also have to talk about programming paradigms. In particular, we need to talk about asynchronous programming paradigms. Who here is familiar with Go and goroutines and channels and things like that? Go's concurrency is based on something called communicating sequential processes. Who's used to doing lock-based concurrency, mutexes, and all sorts of things? I think probably we'd all agree that dealing with CSP is a lot less error prone as the programmer than the old lock-based way of doing things. It's both a wonderful model for doing asynchronous stuff, but it has a problem where it doesn't solve the deadlock problem. You still are susceptible to deadlocks in this model in the sense that you could have two processes, say two goroutines that are communicating over two channels, and one process is waiting for a read on one channel and the other process is waiting for a read on the other channel and they're locked, and they can't do anything.

CSP I think is not the end all be all of the asynchronous programming model. What can we do instead? Turns out the solution is very old. Who here has heard of the actor model before? I believe that goes all the way back to 1973 when Carl Hewitt published a paper about it. The nice thing about actors is that it's naturally asynchronous. Everything about it is asynchronous. Everything is an actor and when you send a message to an actor, that's an asynchronous call. To manage the complexity of that, every actor processes one message at a time and thus the actors themselves move sequentially, which is easy for the programmer to reason about taking one turn one step at a time. Through this, we have a concurrency model that's actually resilient to some of the locking problems that affect other things like CSP. In fact, CSP we have found turns out to be a good primitive on which to build actors.

If you take this to its extreme, if an actor can only send messages to other actors that it has a reference to, then you have a capability security model. Now the actor model and capabilities have combined together into a really powerful abstraction. If you're not familiar with how actors work, there's really three essential things. An actor can receive a message, and when it receives a message, it can either send a message to another actor or perhaps many actors. It can spawn a new actor and get a reference to it, perhaps spawn many actors. Then, finally, it can change its behavior for handling the next message it receives. That is how the actors handle state transitions and become state machines. There are three very pretty simple principles and that's it. If you can understand those three things, you know the actor model. It's a very simple but very powerful programming paradigm.

This is the only slide of code we're going to show here today. It's in Scheme, which is a dialect of Lisp. At the top, we have an actor constructor, it's named greeter. It gets some initialization arguments. It's getting a name. We want to send strings. We want to greet other people. Inside that little Lambda thing, that's a function, and it receives as an argument another name. Then we say, "Hello, Bob! My name is Alice!" for example. That's how we define an actor. Then to spawn, there's a spawn operator. We spawn a greeter named Alice. Let's say we passed a reference of Alice over to Bob. That's not shown here. Then, finally, we have this little arrow operator, which sends a message. We send a message to Alice. Bob sends a message to Alice saying her name is Bob. We get back, "Hello, Bob! My name is Alice!" One slide here shows the essential things about the actor model.

That's great, but we need to talk about handling messages sent to multiple machines, we have to talk about networking protocols. Is REST good enough? Can we just send actor messages with REST APIs? It's not a good fit. It's essentially a client-server communication, it's really best for SaaS type things. You have a thin client in the server. Usually implies the ACL security model you might have like doing a PUT request to /user/1, or whatever, these are endpoints that anyone can hit and you have to provide some kind of authorization token to know that that activity is allowed. The browser's origin-based security model really clashes with capabilities, so it's not a good fit. What about remote procedure calls? In general, yes, we have bidirectional communication, that is great, however, RPC protocols either don't have a means of reference passing. They talk in forms of pure, just raw data, or if they have reference passing, it's flawed. For example, if you're familiar, this is from last year, React has an RPC protocol under it, and it has a form of reference passing, but it was insecure and vulnerable to remote code execution vulnerability. We have to be very careful with our RPC protocols.

**Christine Lemmer-Webber:** Here's what we need. We got to think about our global model, maybe even a peer-to-peer model. We have to assume it's dangerous. We need to assume we're working in a network of mutually suspicious actors, a mutually suspicious environment. We need to use capability security. I think that's our path out of a mutually suspicious and peer-to-peer environment.

**David Thompson:** If we combine RPC with a capability reference passing model, what do we get? We and some other groups are working on a protocol called the Object Capability Network. This is a cute little implementer's diagram. In short, we call it OCapN. What is that? It's RPC with secure reference passing. It's transport agnostic. It doesn't matter the medium over which it goes. It could be, we be talking WebSockets, it could be Tor onion services, could be Sneakernet for all OCAPN cares, it doesn't matter. It supports distributed computing. It's a point-to-point protocol, but with support for transferring objects to a third party, which then enables sharing that with another party and another party, and forming distributed networks. It's notably a schemaless data model. You won't find protocol buffers here. For example, it has an open world model.

**Christine Lemmer-Webber:** You can layer that stuff on top, but it's just not at the foundation layer.

**David Thompson:** It has an asynchronous call return model using promises. Anyone that's used promises in JavaScript, this would come very naturally to you as the way to do things. It fits naturally with like an Async/Await model. Currently we have implementations in Scheme, which is the language we like to do our research in, JavaScript, and also Dart. We're hoping many more to come.

## Naming - Petnames

**Christine Lemmer-Webber:** You said naming's hard. Naming's easy. How do we name things? We've got DNS. We've solved the problem.

**David Thompson:** Can you go to this domain for me?

**Christine Lemmer-Webber:** Yes, this is PayPal. There's no problem. I go to this thing all the time.

**David Thompson:** Is it PayPal?

**Christine Lemmer-Webber:** Is it? Isn't it PayPal?

**David Thompson:** Is it PayPal?

**Christine Lemmer-Webber:** Is that a 1?

**David Thompson:** Or is it an L? Is it a lowercase L?

**Christine Lemmer-Webber:** Yes, it's probably an L?

**David Thompson:** It's a 1.

**Christine Lemmer-Webber:** Let's find out. That's definitely a 1. I've been phished.

**David Thompson:** Global naming systems we have the phishing problem, domain squatting and all these sorts of things, typosquatting attacks.

**Christine Lemmer-Webber:** Also, not only that. It's got that problem. I think this is going to be easy because what we want is a decentralized, secure, and human-meaningful system. Nobody's in control of it. We can do all three of those things at once.

**David Thompson:** If we only had something that satisfied all three of these properties, we would be in good shape. Unfortunately, Zooko's triangle tells us that names can be either human meaningful, decentralized, secure, but not all three. You pick two. When it comes to domain names, we have human meaningfulness and "secure." spritely.institute, there's a name you can remember. You can go to that.

**Christine Lemmer-Webber:** You can use globally unique instead of secure, and that also works.

**David Thompson:** Yes, globally unique. What about a naming scheme that's a little bit different? How about Tor onion addresses? These are decentralized because the identifier is a Base32 encoded cryptographic public key, but I can't even fit the onion address on the slide. I have to do like a dot, dot, dot. No one's going to remember this, but it's secure. We want that property. What are we going to do? We have a solution.

**Christine Lemmer-Webber:** Petname systems.

**David Thompson:** What are petnames? Petnames map human-readable names to secure decentralized ones. In other words, if we start with the Tor onion address where we have the secure name, but it's not human meaningful, we can layer on top a system. We can layer petnames on top and thus get human meaningfulness out of them. This is very similar to your cell phone contact list.

**Christine Lemmer-Webber:** If I see mom show up on my phone, that's the global mom? No, actually right. It's specifically my mom. I have a phone that's full of phone numbers. I don't remember any of that stuff. My phone handles it for me, so it's no problem. There's a locally meaningful mom, that's pretty helpful.

**David Thompson:** Yes, it's super helpful because I remember my mom's old landline phone, but I don't remember her cell phone. It's really nice to have a system to help me. There's not just petnames. In such a system, we also have proposed names, which are names that we give to ourselves. "Hi, I'm Dave." That's my proposed name, but you might not put me in your contacts list that way. You might put me as QCon Dave, or something, so you remember which Dave. You might know many Daves and that might be a good way to disambiguate. Let's say a pizza chain is calling you to ask about the order. We had some problem with the order that you made.

**Christine Lemmer-Webber:** I don't have this pizza chain in my phone book, how am I going to find out who they are?

**David Thompson:** Yes, I don't know. In this little mock-up, we have Pizza Piano. It's a local pizza chain that doesn't exist. It turns out that there's multiple locations. We see a Pizza Piano.2 here. We can have name collisions with proposed names. They're not globally unique. In petname systems, we have UI concerns that didn't exist with global names where we have to figure out how do we disambiguate proposed names, how do we render a proposed name so it's clearly different than a petname. In this mockup, you'll see the question mark before it. That's just our little mockup way of showing that this is a proposed name. This is all to say that there are UX concerns that come into play with the petname system that we have to design for. It's a little bit more complicated. Finally, I want to discuss edge names. We all have our personal phone contact list, but what if you could also look at who you have one degree of separation from?

For example, Christine may share her contact list with me. In this example, someone's getting a call from this Jane Nym person. The user has access to Alyssa's namespace and sees that that's a Jane Nym there. Then maybe also Jane Nym is a Dr. Nym at a university. Also, in this example, the user has also a faculty directory where they can look up. They have two other namespaces by which they have one degree of separation from this person and thus can gain some context about who is calling them.

**Christine Lemmer-Webber:** Do we have to throw out DNS? We already got DNS.

**David Thompson:** Yes, we don't have to throw it out. In a petname system, DNS can just be another edge namespace. A petname system can subsume globally unique name systems such as DNS. It provides a path of incrementally moving to a petname system from a global system. That's a lot. If you would like to read more about this, we have a white paper. See that URL, https://files.spritely.institute/papers/petnames.html.

## Putting it All Together

Let's start to see what it's like to put all of these things together.

**Christine Lemmer-Webber:** We got all this stuff here. We've got access control. We can solve it with capabilities. We've got the communication stuff, decentralized communication. We can do it with actors, which combine with capabilities. If we want to do decentralized naming, we have a way to be able to do that and make it make sense by layering a petname system on top of it. It seems like we're in pretty good shape. Here's the problem. We got to get this stuff to users. We're writing our weird parenthesis programming language. I don't think that ships in browsers today. I don't think it ships on many people's computers by default. How are we going to get it to them?

**David Thompson:** We're talking about a whole new tech stack here. We want people to actually use it, not just to be research that we do that no one ever touches. We want to get things into users' hands. How might we do that? Let's talk about platforms for a minute.

**Christine Lemmer-Webber:** I've got my PalmPilot here. I think we should ship to Palm OS. This is the future. I really wanted to beam an infrared contact to you over here so that you can share my petname system with you.

**David Thompson:** Let's talk about maybe some more modern platforms like Android and iOS.

**Christine Lemmer-Webber:** Android's locking itself down.

**David Thompson:** iOS was always locked down to begin with. We have a gatekeeper in our app store? Things like that. We have problems there. We're not guaranteed that we can ship an app to those stores, especially if they're controversial in some way.

**Christine Lemmer-Webber:** What does everybody have?

**David Thompson:** Everybody's got a web browser in their pocket or on multiple devices. The web for decades has remained the one platform that has stuck around and has not been fully captured. For what we're doing, we think web deployment is absolutely critical. Everyone has a web browser. It's a single target that works everywhere, asterisk. Sometimes Safari's a little late to the game on something. What we can do with it is we can use web servers in the client-server model as a vehicle to deliver what's otherwise a peer-to-peer app that runs client-side. We can use the web to distribute the asset files to bootstrap someone into a peer-to-peer system. Maybe the web browser experience isn't the best possible experience on the OS that the user's using, but it's one that works universally. It's been where our focus has been. To do that, we have a little project called Hoot.

It's got a cute little owl mascot. We had a choice. Do we try to do things in JavaScript or we try to do our own research in weird languages and stuff? We went the weird language route to do our research. We still want people to use it. How do we do that? Who here has heard of WebAssembly? We decided to go all in on WebAssembly, and we ship all of our programs as WebAssembly binaries. Hoot is our WebAssembly compiler and tool chain. Again, we write our own stuff in Scheme. Hoot is a whole program Scheme to WebAssembly compiler that tries to make the smallest possible binaries to ship to users. It uses the absolute latest and greatest in the current WebAssembly standards. We use the WebAssembly GC operation set and many other things. Notably, it supports all major browsers and also JavaScript runtime such as Node.js.

I haven't tried it on things like Bun or Deno, but they're V8 based and I expect them to work there too. Not only is it a compiler for a particular odd programming language, it's a self-contained WebAssembly tool chain. It includes an assembler, a disassembler. It even includes a WebAssembly interpreter so that we can test programs outside of a browser or outside of the V8 runtime or any other WebAssembly runtime. It's actually a very great base for others to use to try to implement their own languages that compile to WebAssembly, particularly if they are dynamic programming languages or otherwise use garbage collection.

**Christine Lemmer-Webber:** Basically, the good news is our stuff is working and is runnable in the browser. This is just a little release that we did to celebrate Goblins' running on Hoot. Indeed, actually, you can see and actually play with this stuff today. We like to show off our stuff. We have this habit of demoing our tech at game jams, because otherwise, it can sound very abstract and high level, but if they can play it, then they can sometimes experience concepts. Here, this is a little block pusher game. In those games, you can get in trouble and then you have to undo things. That undo thing uses the time travel aspect of Goblins, but it runs in your browser, so it combines the two of them.

**David Thompson:** We built this as a little celebration of getting the actor model stuff all the way into the web browser with Hoot. If you like games, check it out.

**Christine Lemmer-Webber:** Is this all fun and games? We got serious stuff here. We've got to fix the world. Can we see a serious example?

**David Thompson:** Let's talk about chat. Let's talk about multi-user chat. Here's a screenshot of a little prototype we made. It's called Brassica Chat. On the surface, it's pretty unremarkable in the sense that you have a list of rooms that you're in. There's people chatting. There's emoji reacts. Everything has this. I'll demo it just to show you. The notable thing is that no one hosts this chat room. Just to see, we're running on a simulated network here. We have our classic characters in a distributed system, Alice, Bob, and Carol. It's running over OCapN protocol on a simulated network. We can do emoji reacts, great. Let's introduce a network partition. We'll take Bob offline. Alice asks, where's Bob? We see it show up on Carol. Carol is still connected on the peer-to-peer network. Bob is not. Bob says, where is everyone? It's there. Bob's message hasn't gotten out to here, to Alice or Carol.

I'll toggle the connection again. Eventually things sync up. This is a local-first chat application. We're all used to messages history being retrieved when you come back online, with Discord and Slack, but they require a central host for what's happening. In this case, it's local-first. It's peer-to-peer. It uses technology that Martin Kleppmann is a researcher on, such as Conflict-Free Replicated Data Types or CRDTs. The important thing to understand here is that it's a chat room that no one hosts. I think this is a bit important to our current legislative environment, isn't it?

**Christine Lemmer-Webber:** Returning to the topic of legislative moats and centralized players and everything, and especially as the world gets a lot more dangerous, especially for people who are vulnerable, who are activists. I myself, I'm a queer person. I know a lot of people who are queer and who are online who are actually very afraid of where things are going, and are afraid of their ability to communicate with their communities. I think we actually need to be able to build systems that are resilient. People are afraid to host a lot of existing tools as these laws come out. What happens when you have a system that no one hosts, or in a certain sense, everyone hosts? People are just talking to each other peer-to-peer. It changes the game on who do you go after. Right now, we have social media that is incredibly surveillable, like even the existing stuff with the Fediverse and with ATProto and stuff like that, all extremely surveillable.

We need to build technology that is able to be resistant to the political environment we find ourselves in today. We talk about this stuff, a lot of it's fun and games and stuff like that, but it's actually also extremely serious. I really actually think this is really important for the survival of democracy in many ways. Nobody hosts Brassica Chat, who do you go after? We think local-first is important, but not only local-first. Brassica Chat integrates CRDTs with the peer-to-peer and capability security environment stuff. We think that's really important. To solve these problems, I think you need a big toolbox. It's not just a one piece, you bring something to the table and it solves everything. You need to actually bring many pieces to the table. A lot of projects focus on let's scale big, let's scale up to a million users, a billion users. Scaling's great, but if you make that your primary metric, you're probably targeting centralization. What about two other kinds of scaling? What about programs that scale down, so that people can host this with very few resources? What about programs that scale wide? We should be able to deploy this across a wide number of environments, and it should be deployable by people who aren't domain experts.

**David Thompson:** I think Martin Kleppmann said that life's too short for sysadmin, and that really resonated with me.

**Christine Lemmer-Webber:** We sometimes do demo-driven development in Spritely land because it can be hard for people to understand, and it's easier to sometimes show. Here's a little virtual world thing that's actually using our technology. We're doing peer-to-peer stuff.

**David Thompson:** Made for a game jam in a few days, so it's a little janky.

**Christine Lemmer-Webber:** It's still peer-to-peer, and you can see it's able to work in real time. I think that whimsy is important. It's important to remember that people use this technology because they have fun, because they want to talk with their friends.

## Conclusion

Let's get to conclusions. We have cool tech. You can give it a try. This is real open-source stuff. You can try it out. We have ways to contact us. We have office hours and IRC. If you do nothing else, play our video games. If you go to spritely.institute, there's an arcade page. Give it a try. Read our white papers. They explain a lot of the things in depth. You can find them on our website. You can implement the protocols we're talking about. Also, we are a nonprofit, and we need support. We need support because it's important to remember that a lot of the technology we all rely on exists because it was a public works project. The internet was a public works project. A lot of the reasons that the internet has gone in a bad direction is because of who is the stewards of our technology. Sometimes you need a steward that has as its mission the benefit of users, and that is the type of thing that we are trying to do.

## Questions and Answers

**Participant 1:** How are you planning to protect against crypto bros and such?

**Christine Lemmer-Webber:** Against crypto bros? The technology that we have built on, it doesn't use cryptocurrency. It uses cryptography, old school crypto. Just that different shortening of it. Our technology is not built around profit maximization. A lot of the technology that ends up getting really big and really hyped ends up being very focused around like, you're going to make a ton of money off of this. You're going to make a ton of money off of our blockchain. You're going to make a ton of money off of your billion-dollar startup that your AI agent is going to run all the rest of your employees. Do you know how capitalism works? Once somebody can do that, everybody can do that. We're not hype-oriented. We're focused on real human-being-oriented technology. Can it be co-opted? Every piece of technology can be co-opted. All I can say is that we are trying to build technology where we are focused on users' visions and needs, and that's where we keep our goals at. When we take funding, we take it from organizations that understand that they don't get to be able to just have us push their particular profit-oriented technology. It has to be stuff that's in the public interest.

**Participant 1:** In a sense, that technology might turn into another dark net.

**Christine Lemmer-Webber:** Technology might turn into another dark net? It is important to be able to build technology that prevents against harassment and abuse. I will say that type of stuff we take very seriously. It's actually part of our research as well.

**Participant 2:** Have you heard of the Solid project by Tim Berners-Lee? Because owning your own data is also important, so I saw the chat demo.

**Christine Lemmer-Webber:** I'm extremely familiar with Solid. Solid was present at the beginning of the W3C Social Web Working Group, where we standardized ActivityPub. They were there at the beginning. We actually have some degree of compatibility in ActivityPub land with them, in that we both use the same Linked Data inbox. I'm very familiar with them. I think that there's a lot of interesting ideas in the Linked Data world. I think that the RDF world is extremely interesting. They aren't always as focused about data portability in the way that we're really worried about. I think that something you have to put front and center is what happens when a server goes down, and so on. That's a lot of the stuff that we've actually tried to focus on since the ActivityPub work. Linked Data technology is extremely interesting, extremely underexplored in many ways. Solid's also been going for a while. I know the people who have been working on it very well, and we've exchanged a lot of ideas. I've even participated in quite a bit of that work. We're very focused on the peer-to-peer use cases and content survivability and user autonomy. There are complementary things to it, but we also take some different approaches.

**See more [presentations with transcripts](https://www.infoq.com/transcripts/presentations/)**


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/presentations/spritely-decentralized-architecture/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。