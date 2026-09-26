---
title: "Podcast: The Future of AI: From Enterprise Adoption to Open Source Sovereignty"
date: 2026-09-26 08:16:24
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Transcript Olimpiu Pop: Hello everybody. I'm Olimpiu Pop, an InfoQ editor. And given that there are "
source_url: "https://www.infoq.com/podcasts/enterprise-adoption-open-source-sovereignty/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-25T11:00:00.000Z　|　采集：2026-09-26 08:16:24

## 正文

## Transcript

**Olimpiu Pop**: Hello everybody. I'm Olimpiu Pop, an InfoQ editor. And given that there are new things are happening out there that you probably didn't hear about like AI and you don't know what's happening in terms of AI and that most of the CEOs are pushing down on the people that they have to do AI, doesn't matter for what. I said that we'll just gather a bunch of folks that actually know what AI means and not only ChatGPT and other stuff to just help us understand how the things are going.

Just in random order, we have with us Meryem Arik, very focused on the inference side, and she mentioned that she likes to talk about open source models. We have Clara and she's looking on the ethics side for BBVA, if I remember correctly. And last but not least, we have Jeff Smith, which helps us understand how the things are happening if you want to keep your models current. And given that at least two of them are company founders and they have a habit of changing names of the companies, I'll let them introduce and add the name of their companies. So Meryem, would you like to get started with a short intro?

**Meryem Arik**: Sure. Hi, I'm Meryem. I'm the co-founder of DoubleWord. I think the thing you're referring to is that we used to be called TitanML, still the same company. We've been working on inference for the last three or four years, and specifically the problem we've been trying to solve is how to make inference much more efficient. What that translates to is how can we essentially get token costs much, much, much cheaper, which has become a very, very topical discussion. So we think about how we can make inference tokens and tokenomics much cheaper and much more affordable so that people can deploy at bigger and bigger scale.

**Olimpiu Pop**: Thank you. Clara, care to continue.

**Clara Higuera Cabañes**: Sure, I am a responsible AI lead. I lead the responsible AI initiative at BBVA. My goal and the goal of the team is to translate responsible AI principles into AI products that we develop at the bank. Principles that can sound very abstract, like for example, fairness or privacy. They are actually links to product failures, like for example, fairness to discrimination, privacy to data leakage. So we are working on how can we operationalize those principles in the AI workflow or cycle of building these products.

Because these products actually lead to affecting also people's lives and we want to focus on building reliable and trust in our clients.

**Olimpiu Pop**: Last but not the least, Jeff.

**Jeff Smith**: Hi, I'm Jeff Smith. I'm CEO and co-founder of C Proof. We do have a habit of renaming ourselves. And so, I am unfortunately part of that pattern, but that's what we're called these days. The reason we're called C Proof is because we're focused on the challenges of understanding what generated code produced. And so, we're working primarily on verified numerical computing, starting with high stakes domains primarily within finance.

And then beyond that, my background and this team's work have a lot to do with the world of AI research and inventing the next stage of things. And so, I tend to spend a non-trivial amount of my time just really doing research and understanding the state of where research points us towards in terms of what can be promised from these technologies and what's an overpromise based on current methods.

## The Existential Need for Enterprise AI Adoption \[03:59\]

**Olimpiu Pop**: Okay. As we all know, in the last couple of years already, CEOs, business leaders just want to, don't miss the AI train. And what that actually means, I'm pretty sure that nobody actually understands or that's what we're trying to demystify. It feels like what happened ... when the cloud appeared, everybody wanted to be on the cloud, but nobody knew what cloud is. I'd like to start by asking all of you what's actually the need for AI in a company. Meryem, care to start?

**Meryem Arik**: So when you ask the question of what is the reason to adopt AI for businesses? Well, the main reason to adopt AI for businesses is that all of your competitors are going to, and that's going to lead to downstream impacts that are going to affect your competitive advantage. So everyone else has realized that you can use AI either to make yourself more efficient or move faster and generate more opportunities. And so, there's this promise that adopting AI will just be strictly better business will be able to do more much, much more efficiently.

And so, every business leader is kind of realizing that there's this opportunity and every business and all your competitors are simultaneously rushing to see how they can adopt it and how they can realize some of these promised gains. And so, the reason why there's urgency and the reason why there is rush is because every single business knows that everyone else is going to do it. And that if you are not able to adopt AI in a way that really does meaningfully change your business and change your efficiency and change what you're able to do, you are going to be outcompeted in the next 10 years.

And so it's quite existential, I think, for a lot of businesses. Now, having said all of that, I think we are still incredibly early. And actually very, very few companies have really started to realize those benefits yet, but they're all working and investing to get to that promised land of radically more efficient and better business structures.

**Olimpiu Pop**: So we are at the industrial revolution moment and then, it's about replacing the horse and carriage with the steam engine.

**Meryem Arik**: I don't love the term replacing as in, we're not going to get rid of all these people, but it is an industrial revolution and you do need to fundamentally think about how you're working. Otherwise, you will be that person who is still getting to work on a horse when everyone else is using a car. And then at some point, in 10, 20 years, we're all like, what were they doing?

**Olimpiu Pop**: Apologies. Augmenting ourself with-

**Meryem Arik**: Exactly. That's the word.

## Reliability, Ethics, and Responsible AI Principles \[06:32\]

**Olimpiu Pop**: Great. Clara, the same question for you. You are in a bigger organization, so then probably it's about that. What are the concerns from the AI machine learning perspective that comes, especially in the financial area where you are more closer to?

**Clara Higuera Cabañes**: Yes, I think it's worth also mentioning that we've had for some years, like a decade or so, machine learning models deployed. So I think it's important to learn also from that experience. And now, with the arrival of generative AI, there has been a lot of focus on the biggest models and what AI or what the latest models can do. But I believe that now the problem is not only on choosing the model, it's about reliability, trust, governance, and organizational adoption problems.

So how can we build trust at scale? And for me, that's a challenge. Also, one question that I guess business leaders should also think is whether AI is the solution of the problem that they want to solve. I think that clears a lot of aspects down the road.

**Olimpiu Pop**: That's definitely true, but obviously, AI is the solution for everybody because they read that in the Wall Street Journal or other publications that are setting the tone or the pace for the leaders. But for those that are not that deep in the topic, what that actually means?

**Clara Higuera Cabañes**: Yes. Well, that was a bit like something unexpected, but sometimes we want to use AI for everything and there are use cases in which AI cannot solve the problem. But going more into the ... how can we build reliability in the product? I guess the responsible AI world or field can bring help in this aspect. For example, the principles like fairness or privacy, they are linked to failures. So if you take into account these principles or also for example, security or sustainability or accountability, these can also help in the development and also reduce technical depth.

So I guess my point is taking into account these principles from responsible AI can make better quality products and also, build this trust. For example, in credit risk or if chatbot from a company is going to address clients, you also want to know how the agent or the bot is treating different people. And then, product managers can also decide, for example, if a LLM has a bias, how can it conduct that bias? So for example, we know that certain LLMs treat young people differently to old people.

So is that something that the product owners want or is something that you want to avoid?

## The Impact on Software Engineering and Quality \[09:36\]

**Olimpiu Pop**: Thank you. Jeff, how about you? It's like the first time when people are saying that white collar work is being displaced. The tech area was for a long period of time like a utopia for many people from the financial point of view. And now everybody seems to be saying that coders can be augmented totally to just not use ... replace as mentioned earlier, by machines. What's your feeling? What's true and what's not?

**Jeff Smith**: Yes. So I mean, I would stack this up. So if we just focus specifically on the impact of generative AI on coding models, there's no question about whether or not to adopt AI. If you think that's a question, you simply haven't looked at the data. There's orders of magnitude levels of benefit in adoption. And so, it's not a question of if we're going to adopt ... in fact, the entire profession is completely reorganizing around the fact that huge swaths of what used to be human code authorship are now reliably producible on a machine. So we are adopting.

It's an absolute imperative because I think the competition dynamics that Meryem described, the you must be at least at parody with your competitors in market, are tremendous within the context of generated code because you are legitimately looking at 10X improvements and velocity sometimes. Also, with meaningful increases in your defect rate, your quality will drop at the same time, but sometimes you win customers with a buggier product that you ship faster.

The other part that comes to mind here is I kind of find the replace versus augment framing insufficiently precise for the profession of software engineering. We just have more concrete examples of we used to write code at this level and then, we raised a level of abstraction. We used to have to write instructions for specific machines, and then we figured out how to make code run across multiple machines. We used to have to write at a lower level of addressing how CPUs sequenced instructions, and then we raised a level of abstraction.

We've done this again and again and again. That's what we're doing right now with an admittedly pretty wildly new technology. Every previous layer of abstraction was largely deterministic. Now we're doing it in a non-deterministic fashion. And so, that quality issue, we're not exactly getting what we intended to get, is really critical and different. But the reality is that the same as it would be professionally irresponsible to assign a whole team of people to write a web app in assembly today.

Because that simply would not be a responsible use of human intelligence in 2026 that was corresponding to your business goals. That's the world we're heading into software engineering where the work of software engineering has to address those parts which are not machine solvable. The same way that we do not redo the work of type systems, compilers, optimization passes inside our infrastructure. The solved problems are getting really, really packaged up and we're jumping up to these fantastic heights, which we don't yet know how to work in.

But we are all on the hook for evolving with. It's an industry-wide cutover. And I don't think there will be a single company that's not using AI code to produce software within a relatively short amount of time.

**Olimpiu Pop**: Thank you. I agree with this totally. For me, it's a matter of adapting to the speed and the need of interacting with the market. I think that's quite important for us. What it translates as a company is I don't have to ask a customer to wait for four, five months to get feedback for a feature that they wanted today. And on top of that, it's about staying on top of the huge amounts of data that we are now just have to take care of as companies, as individuals.

## Proprietary vs. Open Source Models and Sovereignty \[13:13\]

Because even you as an individual have to digest a lot of information for, coming from all over the place and it's impossible to stay on top of it. And I think it's a tool fit for the purpose of this current stage. But is it that simple to just pick between, I don't know, OpenAI and Anthropic? They seem to be the gods, the titans of the space. And for a long period of time, there was a discussion buy versus make in the space. Now it seems that it's quite simple to just make what you need.

And then it was a discussion about open source versus enterprise level. What do you guys think?

**Meryem Arik**: I can maybe make comments on this because I'm recently fired up and very angry about the recent Claude Mythos Fable release. So you are right, for most enterprises, they've been looking at OpenAI and Anthropic as the source of their models, the source of their intelligence. But at the time of the recording, it came out yesterday. Claude Fable, I think, is showing a very worrying trend in the direction that a lot of these companies are going. And to kind of explicitly say what's happened is Anthropic specifically has nerfed the ability of these models for certain tasks, specifically for frontier LLM development tasks.

What's really worrying is that it's nerfed it in a way that the user doesn't know. The user doesn't know that it's going to be stupid for these tasks. And actually that leads to a really unreliable system on the whole. Not to mention that this model does not have zero data retention. You get rate limited a lot, it's slow and it's incredibly expensive. And I think it's the clearest picture that we've ever seen with this Claude Fable release of why people and enterprises are moving from open source to closed source models.

The open source models have now reached a frontier level where they are good enough actually for the vast majority of tasks that we're currently trying to tackle and they are substantially cheaper. So the cost differential between the leading proprietary model versus open source model is like 10, 20X in some cases. And so you have huge cost differentials. You don't get rate limited, and most importantly, you kind of control their performance. So you're not going to have to worry as like, "Oh, has my model been kind of nerfed or quantized or whatever it is."

And that I think is driving a lot of people to move to open source. And the pattern that we see frequently is find product market fit with your proprietary model. But then once you've got product market fit, then people are looking to move pretty quickly to an open source model that they know they can control the quality of and they can know that they can kind of scale affordably. And so yes, I'm very fired up after this latest ... because I think it is the perfect example of why we've been championing open source model as the long-term sustainable solution for the industry.

**Olimpiu Pop**: Thank you for that. So what you're actually saying is that buying something that is actually a cloud offering, you might pay for something that you actually don't get. They have the ability of changing behind the scenes, I don't know, you ask for fries and they just provide you mashed potatoes in the meantime. And on top of that, the other thing that is worrying from my point of view is it's quite easy for them to hide the price. And we saw the change in the last year or so when last year it was like, okay, we can replace with, I don't know, $20 per month subscription.

Now the price is hiking and hiking, leaving aside the ethical and the environmental costs that we are all paying.

**Jeff Smith**: Yes. I'd love to add one small dimension here is that within this particular chapter in the hype cycle, Anthropic has probably played the best game in terms of creating this paper tiger that people are really afraid of, as if there weren't many, many other comparable models available from other providers. And so, I think it's literally the same day Cohere released to their own open source model from what is an absolute first tier lab, not based in the US, serving enterprises and governments at scale to do coding as well as any other provider will give you.

The idea that you as an organization with meaningful budget can't get sovereignty over your own software supply chain is ludicrous. There are vendors lined up down the street happy to give you control over your technology. And so, I think this idea that we sort of have to be a, beholden to the whims of whatever one particular company's business model drives them towards is not the future of software engineering. The reality is that software engineering is a broadly distributed skillset and that there's going to be AI technologies from many, many different organizations that give people that ability to move into that open source and more sovereign modes.

Even if you probably need deeply expert vendors who maybe produce the model and then licensed to the open source version. Certainly you want people to run your infra for you. It's a complex technical job. You want help with that, but you simply do not have to buy the black box from the valley company that's overextended in a ludicrous valuation. That's just not a business necessity.

**Olimpiu Pop**: Yes. And for me, it's a bit ironic because for such a long period of time, especially in the enterprise sector, we as an industry, made sure that we are just covering all the holes as much as possible, even though the holes are still out there and it's harder and harder to keep track of them. And now, all of a sudden, you just take the thing that is generating your intellectual property to the cloud or to the space now. Probably that's the trend of moving the AI to the space, right?

It's quite ironic to see these points happening. And I do agree that it's important, but what should we do? Take, I don't know, warehouses or fridges to store that or what should be the approach? But before that, Clara, what do you think in terms of the part with verifiability and ethics? When we are talking about the cloud provider, what should we look into? What allows us to know for sure that we have all the things checked?

**Clara Higuera Cabañes**: Yes, I was reflecting on what Meryem and Jeff were saying. And I agree on the challenges that, how do we control the quality, right? And actually, I think organizations now are struggling with defining frameworks of evaluation like the famous evals. What are the criteria that make a model suitable for specific use cases? Because these models are general purpose models. One can be good at minimizing hallucinations, but maybe in a use case where you want to create a synthetic data, you might not care about that, but you care about latency or cost.

So I think now it's important to come up with metrics that are on one hand, standard for an organization. For example, relevance, correctness, standard metrics that have already been used, for example, for chatbots or rack, but now also starting to build standardized infrastructure or methodologies for measuring, for example, bias or security, like making agile evaluations of adversarial testing for security, or in the case of fairness and bias, we are integrating in a tool available for all the company metrics to know if the model treats different populations, different ... in the context of Spanish speakers also.

So I guess coming up with a set of metrics or controls, like for example, a marketplace of Evals, for example, that engineers can use along the organizations. And then with more use cases being scoped, new metrics can be added to that marketplace. So on one hand, that is important. And on the other hand, the mindset of evaluating and constantly evaluate models can help in that decision of open source or enterprise as well.

## Evaluation Frameworks and the Mindset Shift \[21:30\]

**Olimpiu Pop**: Okay. And a follow-up question that probably will fall between you and Jeff most probably, but we don't want to exclude Meryem either, is there is also a need of a mind shift because up to this point, coding meant something binary. Either it's true or false. You had a test, either it was falling or it's red or green, right? But now, when we're discussing about AI broadly, generative AI per se, you have gradients. It's something that can be 80% for 80% of the cases. How would you as a company have to bear that in mind? Because it's a huge shift from that point of view.

**Clara Higuera Cabañes**: I think this is an interesting problem. Choosing the threshold of what is acceptable in a specific metric. This has been in machine learning something that has always been a challenge. And I would say there is no ground truth or a specific threshold that can suit every use case. So I think the point is to have a conversation between the multiple stakeholders, like for example, business, product owner, engineers, developers, and also designers probably to decide what can be a good threshold.

So for example, if we are talking about fairness in credit scoring, it has never been said what is the threshold of a model being fair or not. But taking into account the number of people affected by specific certain bias and what the impact can be, for example, in a year, it can give you insights of what fairness is acceptable if we cannot reach to zero mitigation, for example. And I think that can relate to hallucination rate or other metrics. So I think it's a conversation to have about what product do you want to build and assessing the impacts.

**Jeff Smith**: What we see in coding right now is that this extreme increase in velocity, it's pretty easy to just force the agents to pass the tests and figure out what passes them. What you then realize is that you don't have a very clean understanding of what tests should be passed and why, or that your tests don't tell you very much. And so, what we as, I would say a profession of software engineering are discovering is that we've always been pretty slow, ad hoc and incomplete in our ability to specify the requirements of the programs we're writing.

And that the more we increase the velocity of candidate lines of code being developed, the more that we're feeling the pain of having insufficient verification technologies. And so, one of the things that I think is absolutely top of my list, which is something I used to love and now is my number one enemy is Python. Python itself doesn't actually tell you a whole lot about what's going to happen with your program when you run it.

And you have to figure that out. And so it's created these cultures of things like test driven development and just effective use of unit tests, post-hoc edition by incremental typing of what are the types of things. This is not scalable at the increases in velocity of coding we're doing right now. And so, I think we're entering into a world where we're going to really privilege how do we know what program the machine wrote?

How do we know what it did right? What do we as an organization need to be true of this program, becomes a larger proportion of the job given that if you can just say what you want it to do, it is approaching some version of free to get the actual implementation. It just turns out you never really understood what you meant by your specification. And I think that really pops up in some very extreme ways.

The more that people try to lean really hard into shipping more code, they just realize that they could not at all whiteboard what they want the resulting program flow to be, even for pretty well established program patterns like eCommerce or something like that, where you feel like the average new grad should be able to walk in and whiteboard it. It's actually incredibly hard to get the right programs out by a specification. And so, I think that's the part where it's not so much about does it pass or fail any unit tests we've written?

It's that we don't actually know what correct is down to the level a machine is going to have to figure out for us. And that our tools hobble us at every step along the way because we've been writing kind of loosey goosey programs because they were easier for humans to keep a fuzzy conception in their head. You go back to old school Ruby on Rails and it's a sort of like poster child of ... web app development is always a work in process.

Every website you've ever been on is only sort of half done. That world is really, really dangerous if you imagine that you're shipping 10 times as much code per developer every day. And so, I think that it ends up being the pressing technical challenge of yet uninvented technology that I think our field is going to have to face. And it also directly makes up to some of the things Meryem was talking about, which is just how does every business rework it's the way it works in the presence of these tools?

Because most organizations don't spend the proportionate amount of time understanding their specifications that they're going to have to if the machine is just going to blindly instantly produce them, the program once it's got the spec. That world is just different.

**Olimpiu Pop**: Okay. So what you're actually saying is that we still need to know what we want. So the machine will not give us a solution for problems that we are not able to properly specify. And on top of that, I think it's more important than ever to listen to the end customer. Now we have the ability of delivering now what they actually want, but that means that we have to create those channels and to listen to what they ask us to do as a business or as a company.

**Jeff Smith**: It's a big shift in the profession. And I also think it's not what a lot of software engineers join the role for. And so, I think there's a whole organizational shift here in terms of being able to figure out how to take people who were trained for one profession are now really practicing something that puts an emphasis on an entirely different part of the life cycle.

**Olimpiu Pop**: Fair enough. Meryem, anything to add?

**Meryem Arik**: No, I think Jeff and Clara's comments are really good. I think we are going to have to completely reinvent and rethink our software development cycle because it's just a completely new way of working. And at the moment, because there's so much pressure to adopt, because we see this as such great technology, a lot of this we're learning on the fly and we're going to make a lot of mistakes and we're going to figure out the right methods. But that's why it's really important when our developers anyway are using AI and adopting AI.

Ultimately, they're responsible for the quality of their code and what they ship because someone needs to be accountable and it's up to them to try and figure out what the right practices are along the way while the industry is figuring out the right guardrails.

**Olimpiu Pop**: Yes. I think we are very good at making mistakes as a profession. Even though we call most of ourself engineers, we are far from the engineers that actually build bridges. Software crashes quite often, but I don't see too many bridges crashing because that is there. So yes, we are good at making mistakes and learning from them.

**Meryem Arik**: Yes. And as Jeff said, often customers would rather have the app with a few bugs today rather than no app at all. And so that's like a trade-off you always have to make. And there's some parts of our stack, for example, our inference engines that we're incredibly careful with and we are very slow and deliberate with. And there's some parts of our stack like our front end or our web app that we actually iterate really fast and are more tolerant for a slight bug in the UI. And so, you have to be mindful of the context.

**Clara Higuera Cabañes**: So I think there are some products that needs more time than others. And for that, I think organizations are leaning also into risk assessment before starting or before developing a product. For example, there are some use cases in public administrations that have a lot of problems when they are used for public services. Like for example, distributing aids or deciding who gets funding, or also for example, there are some use cases or models that are used in prisons that score whether a person, when they commit a crime, what's the probability of committing crime in the future.

So that is pre-crime prediction, which is ... well, if it's not transparent, there are prisoners that they know that this score is affecting the length or the duration of their prison time, and they don't know what to do about it. So I think this is what I meant earlier about making sure that AI is the solution. So I think when products lead to affect people's lives, we need to take some considerations.

**Olimpiu Pop**: Yes, I agree with you. The convenience is very dangerous. I'm just remembering the moment when I discovered the search engines of internet, right? So I stopped using bookmarks because it was a lot easier to just go and scroll through the first results. And now my feeling is that a lot of people are not doing a lot of stuff that they are able to and they are just using the big hammer. Okay, I'll just drop it in the chat and then, it's too much.

And I'll give you a naive example. At some point, I was writing something and then rather than, I don't know, put a text in the Google Docs and just see it there, I just put it in ChatGPT to see how many words do I have? And then, I just pushed me back and I'm just trying to do that at least once per week when I'm just thinking outside of the box to just try to use plain and simple tools that are way cheaper and then, they did the job for a long period of time.

That's one thing that I think it will be quite useful to just fully understand where we are and not be afraid of taking it the other way. It's easy, but how easy it is with open source? Because until now it was, you just downloaded something and you installed it. But now there are way more than that. You have to adapt it. You have to probably refine it. And it's also retraining. So Meryem, I suppose you're the closest to the topic.

**Meryem Arik**: Yes, maybe I can touch on this. So I actually don't think the open source closed source discussion is a discussion of bio build because actually for the majority of people who want to use open source models, they should use them through a third party inference service like Doubleword, Fireworks, Baseten, together. There's plenty of those who will abstract away, do all of the infrastructure, which is really, really difficult work. And that is like you need a lot of people to do that really well and you need a lot of GPUs to do that well.

And so for the most people working with open source models, they should work with a third party inference provider and they should just use the API the same way they use the OpenAI API. There's a very small number of companies who for whatever typically sovereignty reason or maybe data security reason, they need to deploy these things themselves. But that is a big undertaking. It is not to be sniffed at how difficult it is to deploy these models well and inference them efficiently, especially given the cost of the underlying GPU resources that you are using.

I don't think open source is a build or buy decision. I think it's actually more of a decision of are you buying or are you renting your intelligence? And by using open source models, you can buy your intelligence and you can be sure that you have consistency of that. So that's kind of what I tend to think. I think there's a lot of discussion in the open source model space about local models. I actually don't think we're going to see a huge amount of local model deployment.

It'll be larger than it is now obviously, but I think the vast majority of inference is going to be data center inference because you get so much benefit of economies of scale. And so, largely I think open source models are going to be data center hosted models that you access via an inference provider.

**Olimpiu Pop**: Okay. So what you're saying is I should cancel my GPU order that I just put in. Okay. Thank you.

**Meryem Arik**: Well, there's a joke that we make that the terminal state of every single business is in neo-cloud and so it can never hurt.

**Olimpiu Pop**: Okay, great.

**Jeff Smith**: If you don't mind, I'd like to jump in because I really half agree with you there, Meryem, and then really half disagree with you, just to draw a line under this. And so I really do think that no reasonable business is deploying open source without having a strong inference provider becoming an inference provider on top of your existing business is a stupid side quest. No business should be doing that. And I think the big thing there that drives a lot of people is really just like sovereignty of software supply chain.

Just fundamentally, Anthropic and OpenAI regularly rug pull you throughout their product life cycle, throughout their week, throughout their day. They're not trustworthy providers because they make it completely opaque. And so just knowing that you've got a particular set of bits that behave in a tested way is just good CTO practice. The flip side I would add is that I think that there is an incredibly promising story of local LLM usage that is on the horizon.

I just think it's different. It's not the same stuff, but it's getting incredibly useful within the bounds of understanding what it's good for. So for example, because of this exponential explosion that goes in sort of long context, you're probably not going to use it for these big, long workflows. But the ability to continually create application experiences that lower out to more deterministic like behavior that are built out of smaller intelligence blocks that do not require network calls is really powerful on a laptop.

And gets to be extremely promising in a mobile device. I think there is this world in which we actually use local models more. Maybe not like you as the company have to adopt them, but I think you're going to find them in certain technology products where people find that way to do the thing a small local model does well within an application experience that a lot of people aren't thinking about today, that I think really don't look a lot like what are the current LLM use cases.

It's just like smaller components of more bounded intelligence, are useful application primitive. I just tend to think that they're not a chunky, large scale like CTO opt-in business problem. It's more of a one more tool in the application developer toolbox that's going to be really relevant for a couple of device focused tool chain sort of companies. That work is already getting really, really impressive with the caveat that it's just not the same thing as the cloud model.

The physics don't match up. So you're building a different shaped technology, which is itself, may have a spot in the toolbox.

**Olimpiu Pop**: I'm sure of that ... the thing that I was pushing for a long period of time is better user interfaces. I mean, at some point in a very specific software, you become very fixed on the way how to do stuff. And then moving somebody from, I don't know, one given accounting software to a different one will just create a huge handicap. Even that given person has a huge experience behind it. But now having an LLM that is able to just comprehend, I want that kind of report or I want that kind of metrics to just allow you to use your experience and ask for those kind of things.

The problem is from my perspective and during the weekend I tried to create the poster and I got like 20 because every time when I was trying to make a very small change, like I don't know, I don't like the color. I like another shade of blue, I just got the whole new different stuff. And that's the part that it's ... well, pictures are not that important, but when you're thinking that you're just playing with algorithms that actually decide for somebody and those things cannot be properly generated, that's something that you have to create the guardrails around it to make sure that you actually get what you're asking for.

## Radical Changes in User Interfaces \[37:13\]

**Meryem Arik**: I think the user interface question is really interesting. And I think there's a very good reason to say we're going to have radically, radically different user interfaces in the next couple of years. I don't think pixels on a screen are going to be as important as we currently think they are.

**Olimpiu Pop**: Last year, during QCon, one of the keynotes was given by Savannah Kunovsky from IDEO and they have a huge movement and working on what actually AI and robots actually mean. Because what they say is that we don't have to think only in terms of humanoid because there are different robots for different things. And now, they just put out a very interesting game to try to see different types of robots, AI and stuff like that. So it's interesting to see what things can come from imagination.

**Clara Higuera Cabañes**: Just wanted to add regarding the small models that they can be also very powerful as you mentioned for building guardrails or small LLMs that keep other models or agents in the right direction or that flax specific directions that are less costly and more sustainable.

**Olimpiu Pop**: I bet that this conversation can go on for hours, but I have to be careful with your time. So is there something that I should have asked but I failed to? That should be important from the perspective of having a proper AI that has the ethical aspects, the carefulness for our pocket in terms of tokens, and last but not least, is verifiable.

**Meryem Arik**: I don't know if any of us can actually give very concrete advice on anything really, because there's so much that we are still trying to figure out as an industry and we're still incredibly early. We can give kind of what our experiences have been. But my advice and kind of what I've seen go best for companies is companies that have very good experimental mindsets and they are experimenting a lot constantly.

They're understanding what the technology is doing. They are quick to drop projects when they don't seem to generate ROI and they're quick to double down on the ones that do. I tend to think that just doing it and starting to build, even if it is like a contained internal project or whatever it is the best way to figure out what is going to work and what is not going to work. I think all of us are still ... and all of us as an industry are still trying to figure out exactly how all of this lands, but you have to kind of be in the arena to have a sense of that.

**Clara Higuera Cabañes**: I think we are in a phase, as Meryem said very early. And it's not only a technical challenge, it's also a people challenge. As also Jeff mentioned about developers that didn't sign for the job that they're necessarily asked to do that now. So when I talk about responsible AI, well, part of my job is also communication awareness. Give examples of what responsible AI means when we're developing AI products. So I think that is from an organization perspective, also a change of mindset.

Now more people, not only developers, have access to AI to build AI products. So I get asked a lot to go to certain teams or areas to talk about these aspects because as I always say, engineers and very few people have been trained in ethics or sociology to estimate those impacts. So I think part of this transition or this adaptation to this new technology is also acquiring this awareness, at the same time as we get used to this technology and get the most out of it.

**Jeff Smith**: To take this sort of slightly counter stance to Meryem here is that I am going to make a prediction about the future. You can judge whether or not I'm qualified to make a prediction. My prediction goes like this. The LLM technologies we're all really focused on right now and we're sort of thinking about the ways in which they roll out across our technology stack and our businesses. They will be obviated by better science. It always comes along. There is a something after attention, after transformers, after dense LLMs, post-hoc sparsified and made quantized and amenable for inference.

And I think some of those things are more principled, are going to behave more deterministically. And I'm going to be even optimistic enough to say that some of them come with orders of magnitude benefits in terms of their inference profiles. And so, that I think a lot of the sustainability topics that come up in the sort of real world application of these models at scale should be pointed directly at the research team's priorities.

I think there's stuff waiting in the wings, if you want to see like sort of money where my mouth is. We recently put up a video on Kolmogorov-Arnold Network, which are a technique invented by Ziming Liu and are one of the, I would say, beachheads of the emerging science of structuralist AI. I think there is a wave beyond this that I think really kind of cuts through some of the Gordian knots that people find themselves really kind of tied up in today.

We just don't have to use specifically these approaches for the rest of time. And some of the ones that come with major downsides, like they're really big, they take a lot of energy, they're really slow. We should just be building towards that. And I think it's actually entirely inventable. We just need to get more of our best and brightest focused on the next problems and a little bit less on what's making money today.

## Predictions for the Future: Structuralist AI and Product Engineering \[42:34\]

**Olimpiu Pop**: Okay. Well, you anticipated where I wanted to go with that. And Meryem created the context when she said that we are still learning. So Clara, Meryem, do you have any predictions for what's going to happen next? I mean, what's your expectations?

**Meryem Arik**: Well, I actually ... the keynote I did in QCon AI Boston a couple of weeks ago was titled What We're Going To Be Talking About at QCon in 2030. And it was a bunch of predictions that I made. Some may be right, some may be not right. And I made them across a lot of different domains. I think one prediction that I have is that what we're going to require from our software engineers and how we're going to level software engineers is going to change a lot over the next five years.

And the kinds of skill sets we're going to need from them are going to change a lot. Specifically, I think we're going to be looking for a lot more product engineers and a lot more engineers that think about products really carefully and think about requirements really carefully as we abstract away for a lot of use cases, some of the technical details as well. And so, I think more software engineers are going to turn into product engineers. That's the prediction that I have.

**Olimpiu Pop**: Excellent. I'm trying that for at least 10 years in the industry. So only AI needed to happen so that people are actually thinking about the product. Clara, anything on your side?

**Clara Higuera Cabañes**: I'm not sure I can give a prediction, but I can say that something that I'm seeing is that AI is involving all areas of our lives. So sometimes ... Well, I think it's getting very difficult to predict the impact of AI in our work or of our products in people. So AI systems have become sociotechnical. So technology shapes society and society shapes technology. So I think in these complex systems, I advocate for multidisciplinary teams that work not only technical profiles or roles, but also like sociologists or philosophers.

So I think that's something that has been ... it's a debate that has been going on for long, but I would love to see that more often. These multidisciplinary teams that can see the whole elephant in the room.

## Bias in Models and Low-Resource Languages \[44:59\]

**Olimpiu Pop**: Okay. Thank you. And maybe a more targeted question from this perspective. There is a lot of bias in models at this point because they were very focused on a lot of Western learnings, writing and so on and so forth. And last year, I think again in QCon, there were people that were talking about African focused languages and then, how hard it was for them to do it. What do you think?

Will we have a more, I don't know, ethical approach and we'll have better models or the crevice between when we'll have, I don't know, a world with two different levels, a layered world where we have very good models for Western societies while the rest of the world will remain behind.

**Meryem Arik**: I think this is what the promise of open source is. What we're seeing from Anthropic and the behaviors that we're seeing from some of the frontier labs will have a two-tier AI system where some people can get access to some capabilities and others can't. We already see that. Some people can get access to frontier LLM development capabilities and the rest of the world can't. And if we continue down that road, we're going to see very much two tier AI adoption.

That's the promise of open sources that we can distribute these capabilities carefully. And I'm very glad what Clara said earlier, because it's making me glad that I did theoretical physics and philosophy rather than just physics because it's at times like these where actually that becomes a bit relevant.

**Olimpiu Pop**: I have to comment that that's an odd association. I mean, the physicist is very ... and the philosopher is exactly opposite. Will we have electrons or will not electrons?

**Meryem Arik**: Well, no, no. I think I studied the analytical philosophy rather than continental. Both physicists and philosophers are very good at thinking from first principles. And we both are very interested in the world. And so that's kind of the link.

**Clara Higuera Cabañes**: Yes. I think it's an amazing background to have, Meryem, at the moment. I would like to add also on the bias because it's something that I have been researching for a long time. Actually, I got into responsible AI from the algorithmic fairness field. And I've done research that was published in NeurIPS two years ago. And we analyzed different models and the rate of bias in different languages. And all models, LlAMA, ChatGPT of the time and other models, they all showed less bias in English, I guess, because they have been aligned in English.

And what we found is that when we did this with Spanish, English and Japanese, all models rated more biased in Japanese. But when the model was fine-tuned with Japanese data, the bias was reduced. So I would like to add also on Meryem's argument about open source models and the ability to fine tune them. This is actually a huge gap that I see in technology when we use in countries like Spain or for example, Mexico.

In Mexico, 30% of population speak indigenous languages and there are more than 60 ones. So I think it's going to be something to do or so to build models that can adjust to those languages as well.

**Jeff Smith**: I just want to chime in at the tail end of this topic to note that we are all anchoring on the properties of large language models derived from web scale data sets in the way that they've been modeled currently using transformers and attention. I'm still going to put a pitch out there for there are other methodologies out there yet to be discovered that the more abstract and symbolic we can make our reasoning, the simpler it's going to be to ingest lower resource languages of any sort.

And it's just lower resource domains of knowledge of humanity. And I think that's another major reason to invest in the more fundamental research and get excited about it is we only have the one internet. We know what the model built out of the one internet, looks like. Now, don't we want some other things that are more principled than their reasoning over things that might only have 20,000 words ever written about them, including things like low resource human languages, but also just niche domains.

Emerging areas of science that requires abstract reasoning in a way that very, very few labs are focusing on because that's not the at scale business. But that's the thing to get excited about for the future, in my opinion.

**Olimpiu Pop**: Okay. Thank you. And the last, last question for you, you all said that it's important to experiment. So maybe just have a short description of what do you have in your current toolbox? How do you use AI or generative AI to be more specific at this point?

**Jeff Smith**: We run a lot of experimentation all the time. We're always interested in adopting new environments. And so, we work a lot with the general reasoning team on their open reward platform. And so we're always excited to see new reinforcement learning environments. We also just grab new data sets all of the time and test the latest from open source. In my opinion, the most ... all of this is so tremendously productive these days with LLMs as orchestrators.

It's really just powerful to work in a very omnivorous fashion. I think one thing that I would draw really specifically here is that we as experimentalists have moved away from building on the substrate of Python when we can avoid it and are trying to encode in more of the semantics of what we're modeling into richer type systems. And so that's driven us to write more principle typed code earlier.

I would say we're part of the larger movement of greater oxidation that is writing or rewriting things into rust to be able to get more compiler type feedback. So we have more of those encoded constraints and so we can make guarantees about what is produced when we actually develop it. And so I think that's ... this is sort of counterintuitive learning. Researchers for years and years, we're trying to get more dynamic, more flexible type technologies. And I think there's now a huge benefit towards leaning into static and principle type systems as a support system for encoding domain knowledge and ensuring those constraints hold in the resulting artifact.

**Olimpiu Pop**: Thank you. Clara, Meryem?

**Meryem Arik**: I can keep it very brief. We've been investing a lot more in long-running agents, both coding agents and also long-running agents to help with operations and other parts of our business. So agents that will happily run for hours at a time is the kind of use cases that we've been excited by.

**Olimpiu Pop**: Okay. So the 24-hour worker. Clara, last but not the least.

**Clara Higuera Cabañes**: I would say that we are focusing now a lot in evaluation. As I said earlier, experimenting with different models and what can be the behavior once we have specific metrics that we want to evaluate. So there are some tools like Promptfoo that help you create data sets and also build agile LLM judges for those evaluations. And from that part, these tools help iterate a lot and understand the behavior of different LLMs too.

**Olimpiu Pop**: Okay. Thank you. Thank you everybody for the time.

**Mentioned**:

-   [Kolmogorov-Arnold Networks (KANs)](https://kindxiaoming.github.io/pykan/)
-   [Promptfoo](https://www.promptfoo.dev/)
-   [Poolside](https://www.poolside.ai/)
-   [Arcee](https://www.arcee.ai/)

## About the Authors

#### **Meryem Arik**

Show moreShow less

#### **Clara Higuera Cabañes**

Show moreShow less

#### **Jeff Smith**

Show moreShow less

You can keep up-to-date with the podcasts via our [RSS Feed](http://www.infoq.com/podcasts/enterprise-adoption-open-source-sovereignty/), and they are available via [SoundCloud](https://soundcloud.com/infoq-channel), [Apple Podcasts](https://itunes.apple.com/gb/podcast/the-infoq-podcast/id1106971805?mt=2), [Spotify](https://open.spotify.com/show/4NhWaYYpPWgWRDAOqeRQbj), [Overcast](https://overcast.fm/itunes1106971805/the-infoq-podcast) and [YouTube](https://youtube.com/playlist?list=PLndbWGuLoHeZLVC9vl0LzLvMWHzpzIpir&si=Kvb9UpSdGzObuWgg). From this page you also have access to our recorded show notes. They all have clickable links that will take you directly to that part of the audio.


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/podcasts/enterprise-adoption-open-source-sovereignty/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。