---
title: "Presentation: Decision Models in Agentic Architectures: From Production to Agent Skills"
date: 2026-09-15 08:05:02
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "Transcript Alex Porcelli: I want to start this and take a moment to reflect what we as a community o"
source_url: "https://www.infoq.com/presentations/decision-models-agentic-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-09-14T11:00:00.000Z　|　采集：2026-09-15 08:05:02

## 正文

## Transcript

**Alex Porcelli:** I want to start this and take a moment to reflect what we as a community of IT have been through the last 12 months. Actually, even less than 12 months. If you had asked me my opinions about AI in the fall last year, it would be completely different to what it is today. Back in the days, not long ago of course, I was using AI, being productive using AI, but it was mostly doing summarization, content writing, scripts, tests, configuration files. I used to be proud, "But AI does not touch my backend code. That is running critical systems for my clients. That is on me, not AI." Something magical happened during the holidays. It was super smart from the labs, new models came out. With the downtime, I had the opportunity to explore the technology more. I believe some of you had a similar experience.

The models were not that powerful as those today, but I quickly realized that has the potential to change my work, my day by day. After 30 years doing software development, beginning of this year, I started coding differently. I do not type anymore. I always interact with my agents in different ways. I'm still learning and I think we are here to all learn. That's an experience that we as a community are exchanging, trying to figure out all the details of this new world. One thing to reflect is, we are here to bring a little bit of our experiences to the age of AI. Throughout the conference, I noticed that majority of the presentations were connecting what we've been doing the last many years in architecture, in storage, in many ways, how to bring that domain knowledge that we have to the age of AI and how to make it possible to integrate to the next level.

I think that's part of our mission as technologists, as practitioners in our companies, as leaders, is to bring a similar experience for the rest of the company, for other functions. Because today we are leveraging this power of AI in our day by day, and I think it's part of our mission to bring a similar experience for the rest of the company. Because that is how it will impact the bottom line of our businesses. That's part of what I'm trying to do here today, is sharing a little bit of my experiences with 20 years doing decision models in the agentic architecture. I'm helping customers and now sharing a little bit of my experience.

I'll start with this challenge to bring something to the age of AI, reading this post from Mark Cuban. "I'm coming to the conclusion that the biggest challenge for enterprise AI and AI in general, as of now, is that it's still impossible to make sure that everyone gets the same answer to the same question, every time. Which is a great response to the doomers, AI doesn't know the consequences of its output. Judgment and the ability to challenge AI output is becoming increasingly necessary and valuable, which makes domain knowledge more valuable by the second. Am I wrong?" I am not the one that we call here at this stage Mark Cuban wrong. I want to highlight two elements. I start with the domain knowledge. I believe that people that are thriving in this environment of AI are because of our domain expertise. Because you can get the same tools with the same goals and give to different people.

One has the skills and the domain knowledge, and to someone that does not have those skills and that domain knowledge, you're going to get completely different results. There is one caveat, though. Domain knowledge alone, you cannot run businesses. Think about large enterprises, thousands of people when you start making decisions, and decisions that are having high stakes, of course. You cannot leverage an individual domain knowledge or common sense. Those are grounded in policies and regulations. This goes to the second point that Mark touched here, the lack of consistency, which I don't need to repeat but I will. This is not a bug. This is actually a feature of the models to have different results. We have been dealing with deterministic systems for the last 40 years. What is different now is that we have the non-deterministic behavior that creates a magical experience. Again, we cannot run business or critical parts of the business relying on dynamic behavior. I don't think the deterministic aspect alone is the thing. I'll call this more a symptom. The major problem that I see on this landscape is not the consistency alone but is the lack of accountability.

What does that mean? Accountability starts of course with the idea to be able to reproduce. Consistency of course matters. It's the starting point. Not only that. If you're working in high stakes decision-making processes you need more than just consistency. Usually in the regulated industry it's very common. You need to explain how you came to that decision. This goes beyond, that was the prompt, that was the thing, and then we generate. The version of the model was this. This is a trace. Good. We need to understand why input A and input B generate the output C. Usually those things are grounded in policies and regulations. Last but not least, the ability to do governance on top of this. Governance has been an overloaded term usually used by doomers that want to ditch AI. I'm not here to do that. It's quite the opposite. I'm 100% behind the AI age that we are living through.

There are important aspects especially in the high stakes decision-making process. The idea to have version. You have a point in time that you have a conscious version of that decision-making process, and ability to review and approve to get this live. Because this is critical, when you go to regulations or auditors, that's where it starts. Go from there up to the consistency.

## Profile

I'm Alex Porcelli. I'm co-founder and CEO of Aletyx. I've been working the last 20 years on making policy executable. I've been contributing to Drools, an open-source project associated with business rules and decisions. Before co-founding Aletyx, I worked at IBM and Red Hat, leading products on this type of technology. Drools is still used by many worldwide in different industries. I would argue that the majority of your companies here have some use of Drools somewhere there.

## Same AI - One Gets Legacy, One Gets Leverage

Back to the problem. What is interesting is all this is not new. We've been doing accountable systems. Actually, all the systems that we have in place have all these properties, all these definitions. The challenge is how to bring this to the age of AI. Before discussing the architecture behind this, I want to take a moment and also reflect on the people that are day-by-day involved with AI. In 2026, all of us rely heavily on AI in our day-by-day, again. You start your day, you check your assistant, or your ChatGPT, or whatever tool you use to get the best of nutrition, your best workout, and what I listen to in my commute. Us in the tech field, we start our day in the job continuing to leverage those capabilities. We have our agents. We have our dynamic world around us. In other parts of the business, let's take an example of someone that works in a bank branch.

When they get to the job, they still see a screen they have to type in, have a form, 100 fields, and doing this like 20 years ago. That's the reality still today. If you stop and think, one thing that I find funny, all the automations that we have in place, what happens is all the engagement with clients start in a digital form somehow. Our existing automation in our enterprises will channel that to a group of people that will connect back to you and will retype that information to your enterprise system. Of course, they know a few knobs how to deal with that to get a better outcome, but you hire a person, a human, and what you're getting in results is a data entry. Because this person has not much to say about the decision that will be made. What is delegated completely to that system, the whole backend of our enterprises?

This person could be doing a much more efficient human type of work. In the bank branch case, you have, prevent fraud, avoid coercion, read market signals, and a bunch of other things. The point is, we should try, and this is an obvious situation that we can do better with AI, but if we just take the AI to automate the ingestion to that form that has 100 fields, there is already a technology that does that. It's robotic process automation. It's able to capture something here, type it in, and it's done. We can do much better, and that is why AI can enable that. Because AI is able to deal with ambiguity, understand the needs, ask for more questions, collect all the information, and ultimately make the decision itself. Of course, today we have the limitation that majority of AI don't have that accountability.

## Demo - Customer Classification

I'll start one demo here. Get a case that I want to classify a customer. That's a very common thing in financial institutions that you want to classify based on patterns, uses, wealth, and many other things. If the customer is A, B, AAA, whatever it is. I'll call my AI assistant and ask it to classify a customer. In this case, it's going to be me.

**Kairos:** Let's start with the customer profile. What is your nationality?

**Alex Porcelli:** U.S.

**Kairos:** Great. What's your annual income?

**Alex Porcelli:** $100,000.

**Kairos:** Thanks. How old are you?

**Alex Porcelli:** 45.

**Kairos:** Got it. How often do you go to the gym?

**Alex Porcelli:** Every day.

**Kairos:** Nice. How many meals do you have per day?

**Alex Porcelli:** Three meals.

**Kairos:** Based on the data provided, your risk band is AAA. Remember, broccoli is like a superhero for your health.

**Alex Porcelli:** Thank you, Kairos.

**Kairos:** You're welcome. Anything else you need?

**Alex Porcelli:** Not for now. Thank you.

Of course, it fails loudly and fine. That was to make a point. The challenge is, AI is confident by definition. You interact with the model and you make whatever thing wrong confidently. Here, again, fail loudly to make a point. The problem is when it fails silently or in the nuances, that is hard to understand. That's one of the reasons that we're still not getting these high-stakes decisions delegated to AI. I've been doing this, again, for 20 years. I know what you're thinking. I could avoid the hallucinations. I may ask AI to generate the code for me. Then you skip the problem of non-deterministic answers. Yes, it's much better than delegating to AI, no question about that. The deterministic aspects do not mean that it's fully governed. As I placed in the first slide about accountability, there's more to it. There is a need to review that thing, to version that, audit and explain.

You may say that your Python code will be committed, there is going to be a version, there is going to be somewhere. Generating the code, or any code, that doesn't matter if it's generated or not. Code by itself is a mix of different things. There are control flow, infrastructure, and business rules all mixed in. Over time, this is hard to go back to that code, if it's written by humans or written by AI, to get back to the explanation aspect. They grounded this in the policy. Much better, but it's still not ideal. There is, I will not generate this code. What I will do is add some RAG, get some MCP, connect it with my existing systems, adjust the existing system, create the new interfaces, put some logs, I solved the problem. Now I have accountability, I have all the properties. Yes, much better than the generated code. If you start duplicating a little, that's fine, you're still grounded in more regulated aspects, it's going to be fine.

## Decision Models

The one thing that I want to highlight is, at this point, you have a fragmented decision-making process. You have it out of the place. You have in pieces here, in pieces there, and in pieces in your backend system. There are better ways to do that. As the name of the presentation references, decision models is one of those. I'm not saying this is valuable for every decision. Actually, the minority of the decisions are what I'm talking about. Those are the decisions with a high stake. If you get your loan, if you get your claim process, this is the type. Not the daily questions or daily interactions. I have this slide here to show this type of technology is very algorithm efficient. This is real data from one of our clients. They have 20 million transactions to process in their data pipeline. Part of this data pipeline they have to reclassify all the time their customers.

This technology processes 18,000 transactions per second, so they process everything under 20 minutes. They are structuring, all the time re-evaluating their customers in general. The importance of that is because every time that you have a different tier, you have access in different products and different fees. The whole experience with the financial institution is defined by the classification.

Let's now understand what decision models mean. What does it look like? We've been doing IT for many years. Funny enough, we build all microservices, now AI, but in the business world, you always have spreadsheets. You talk to someone that will probably type something in your system, but will have something in the department, or as an individual has spreadsheets. If you talk to anyone in the business world, they will have their own definition of the rules and everything that will look like this. It's a spreadsheet. This is a decision table where on the left-hand side, you have the input columns, what defines the conditions. On the right-hand side, you have the outcome or the results. Each of the roles define each individual rule. In this case, here the first is, if it's foreign, it's automatically defined as a BBC. If it's U.S., over $80,000, between that age, it's AAA.

Simple as that. This is the theory. Super simple. Let's now take a look how it looks in an executable format. Now, the fun begins. This is how it looks, the executable format. Hopefully, it's very similar to what we were looking at before, because that's part of my point. People that are usually close to the business are very comfortable dealing with and exploring these types of models. This is running, this is runnable. I have here Brazil, $100,000. It's the first one. If I change, it will change also the impacted row. It looks simple, but it's powerful. Of course, this is an example. It can be much more complex. You can use expression languages, like you do in a spreadsheet. There's a bunch of things that you can do here. Sometimes, one decision table is not enough. When you're doing critical computation or critical decisions, it's usually different inputs, a chain of decisions that are made to get an ultimate decision about whatever you're looking for. That's what I'll show you, that this type of technology provides all these capabilities.

Before building that, I'll bring a spreadsheet, which is basically what you find in the business domain. Someone that talks to the business, they will have something like that, or a variation of this. This is a spreadsheet that has a few tabs. Each tab has a different set of rules defined in the different decision tables, and ultimately a customer classification here. What you do now is getting this, which is a tier model in a decision model format. Let me get here. Here we go. We will not type it in. I will upload that spreadsheet and ask for an AI. That's where I'm freaking out inside because we never know what's the results of AI. Hopefully, it'll come in a minute or so or less, a model that is compatible or looks like or remembers what we just see in this spreadsheet. It worked. Here we see, this in the bottom here, we have the inputs.

Those are all the columns that we saw. This is the first layer of decisions. If you navigate each of these layers, they have a decision table. On top of that, you have ultimate decision made at the composition of other decisions. What I'm presenting here is not something that I created. No. This is an open specification. This is called DMN, decision model notation. You can use this open source software to process this type of models. The open-source project, Drools. Everything behind here is using Drools to process this model. I can use this tool here. Can you create use cases for this model? Another try. It worked great in the first. Let's try the second. Now it goes. It creates now the test case, and I can run each of those. In a similar way I can explore each task, see how it hits. Again, this is a tool that you can collaborate and work with the business side that have ownership or have the knowledge to build these things.

Getting towards the point of the agentic thing, you can publish this model. Once this is published, because this model is so rich and is based on specifications, an open standard, the AI is able to understand this model and translate and build, for instance, a skill out of this. This is what I have. This is a skill. All the information, how to execute, the input information, each and everything that is needed, it's providing this skill. To make it fun, let's get the link of this skill. Let me get to Kairos again. "Hi, Kairos. Can you try and test the following skill?" While he's thinking, let's see if we see any change here. It's executed a bunch. Match the hour. Here we go. He was trying. He tried. It executed the thing. It didn't reply. I don't know why. He came back. "I'm here. The skill works now. The issue is just field casing," whatever. It was enough to give a few tries, and there were some errors. There's some trying to understand how the model works.

What I saw is that based on the expressiveness of this model, and this is an open standard, we were able to generate a skill that is not generic. It's very domain specific, based on something that is executable. Ended up being a business skill. We also noticed when I check the execution that every information was traced. With that, we can go back to the model in that version and see the inputs and the outputs and go back to the whole tree of the model and prove why those things happen in that way.

## The Architecture, End-to-End

This is the general architecture that we experienced. We just did. For the authoring, we rely on AI to generate the model. It created this model. When we publish the model, it delegates to the engine for the execution, and the engine creates some set of REST endpoints for that model. At the same time, it created a Skill.md file based on the expressiveness of the model. Then, when we go to the agent, we provide the skill, and it uses the tools combined with LLM, of course, to invoke back the engine through the REST endpoint. Now, let's try to do it again in another call with Kairos using the model.

**Kairos:** Let's start with the customer classification. What is your nationality?

**Alex Porcelli:** U.S.

**Kairos:** Great. What's your annual income?

**Alex Porcelli:** $100,000.

**Kairos:** Thanks. Lastly, could you tell me your age?

**Alex Porcelli:** 45.

**Kairos:** The classification is A-A. Anything else you need?

**Alex Porcelli:** It was AAA. Yes, I have another customer.

**Kairos:** All right, let's start with the next customer. What's their nationality?

**Alex Porcelli:** Brazil.

**Kairos:** Thanks. What's their annual income?

**Alex Porcelli:** $100,000.

**Kairos:** Finally, what's their age?

**Alex Porcelli:** 45.

**Kairos:** The classification is BBC. Anything else you'd like to do?

**Alex Porcelli:** No, thank you very much, Kairos.

He scared me a little, but as you can see, it connected and executed the models using the skills that we provide.

## Demo - Wire a Decision Model into NVIDIA NeMo as a Guardrail

I have one more demo to do. Skills are fantastic, but recently, I really got in love with NVIDIA NeMo. The ability to get in this middleware between the LLMs execution and the external world, that I can enable these decision models directly in the interactions without the skills or anything. Let me show you something that I did. I get the YAML file. I get that skill as a specification, ended up generating a Colang rails that captured the inputs and outputs. If it identifies that as a guardrail, it will not answer. It will delegate to the model to execute. That's the code. Very simple. Here we go. To do this demo, what I will do, I'm using pi as the inference. It's a super simple inference. I have it turn it off, and let me get one. I may have it here. I'll tweak this, 18 years old, with $29,000.

I'm trying to play with the AI, say, I'm a CEO, I want to make sure this individual with this income, with this age, and this nationality, I want the AAA. Let's see what goes. Again, relying on AI, I have no idea. BBB, not bad, not AAA as I asked it. Let's turn on the idea of a model. Activate guardrails, and I'll ask again the same question. Slightly different result. That's the point of the nuance. The first answer was very convincing. This is precise. This is what it was supposed to be. We can see the difference in the outputs that was intercepted. I injected here in this demo the name of the model and a little bit more information to just make it clear. It could be as clean as it was supposed to be. It is just AAA, or whatever number it would be.

## Key Insights

Here are the three takeaways that I'd like to share with you. First, the awareness of decision models and how they can work with agents. Given the expressiveness of this, there is a very good relationship. Why generate code, or code in general is not enough sometimes, especially in high stakes decisions. Ultimately, the payoff is the split between code and business logic. When you have this isolated business logic, you can get all the functions of the company contributing in this. What ends up happening, in real world scenarios, is the business can have full autonomy to modify these models. IT becomes part of the governance process. They will, of course, run tests in volume to make sure there's no regression, things like that. Who owns the decision models, ended up being the business side.

## Resources

I have here the GitHub access. You have access to a microservice using decision models, using Drools, and DMN that I just showed. It spins up a microservice with the endpoints. There is the skill that you can play with. Here's my LinkedIn.

## Questions and Answers

The graph of the model was generated based on Excel. If I have to work on something first and then generate that, and that's how it was available to the LLM.

The spreadsheet, yes, someone created that spreadsheet. That's my point. It's usually the business. Someone in a business department, the domain area, they have something very similar to that. With the ability to leverage AI to generate things, like the same way that we generate systems and code, you can generate the model the same way. It translates that spreadsheet into that graph. Then that graph, and behind the scenes is just XML file. You share that with LLM and ask questions for the LLM to extract the information that you want. In this case, I want to have the definition of the inputs, definition of the outputs, what type of business solution that it is providing, that will generate the skills.

**Participant 1:** Did you notice that it's deterministic, it always followed the graph? Or if you use an approach like NetworkX to generate the graph for you with LangChain of tools, will it work more deterministically?

**Alex Porcelli:** The generation of the model, what we saw here, is a mix of different things. That's part of the technology that my company will develop. You can use whatever, but we integrate this in the editor and everything. There are multiple tools. It's not just one tool. It's not deterministic, for the reason that we mix our own models with frontier models. It is a mix. The output, it works, as you could see. There are some guardrails.

**Participant 2:** Let us think you have two models, and one model is dependent on another model. In your case, how would it relate? Let us think one user uploads a model, then a second user uploads it, but you want to relate based on first model decision.

**Alex Porcelli:** There are multiple ways to solve this problem. You can create chains like I did. That's one way. If that model is itself rather chain complex, you can create an agentic workflow or a traditional workflow and change the execution of that. We've been doing this for 20 years. When you go to Drools in the Apache Key, which is the umbrella project, there are projects for our workflow. Today it's Cogito. That technology provides the workflow. To solve that problem, to orchestrate multiple decision things, you usually have a workflow engine.

**Participant 3:** For the case of when you're using a decision model, what happens if you ask the agent to classify a user that hasn't been accounted for in that decision model? Would it infer based on the data? If there are faulty user requests, would that also be accounted for?

**Alex Porcelli:** One of the times that I asked Kairos to test this queue and he became silent in the chat, there were some errors generated in the log. What happens, this time, is it will return that something was not possible to execute. It will not make up any data. That's the whole point of this. Of course, you want to test your model to make sure that the input and outputs will work. If there are missing inputs or there's something wrong, the model will fail to execute and it will result also in the agent. One point here is like, this technology is no different than when we have our coding agents to rely on grep or curl. It's exactly the same thing. If grep or curl fail, it will come back as a failure.

**Participant 4:** How do you catch hallucinations then? What do you do? How do you hold the model accountable?

**Alex Porcelli:** The decision model is a deterministic thing. You define all the universe within there and it will not hallucinate. It will not deviate because it is deterministic. It is a different branch of AI. The symbolic AI comes from the expert systems, and this has been deployed in the organization for the last 20-plus years. That's one side. What it can hallucinate is the assistant to build the models but can hallucinate your code the same way. You keep vigilant when you're generating code in the same way when you're generating models.

**Participant 5:** Just to understand correctly, so the skill, does it actually execute the DMN model as a script in the back or is that model interpreted by the model? Just to get a proper understanding for it.

**Alex Porcelli:** The skill will invoke the engine that executes the DMN. The model will not execute the decision itself. That's why it's deterministic. Back to the analogy with curl and grep, it's the same way. It's not that the agent will figure out how to solve that question. It will delegate to a specific tool.

**Participant 6:** Are you able to share any information about the tool parameters on those governed tools that the LLM calls to get decisions evaluated through the decision engine, the rules engine?

**Alex Porcelli:** It's just a CLI that executes the DMN that connects to this. It's a simple tool. Again, my relationship with this is grep and things. In this case, it's the complete execution here because the tracing comes in the engine.

**Participant 6:** Do you ever run into issues where the LLM doesn't call the tools with the expected values, causing it not to call the expected endpoint decision?

**Alex Porcelli:** My experience is when you have a well-defined skill, it will follow the skill. When something is missing, they ask or they're going to fail. Then it comes back as a failure. You can also do this with NeMo that will also fail as more in the guardrail side. The same way the guardrails work, it will work in that way.

**See more [presentations with transcripts](https://www.infoq.com/transcripts/presentations/)**


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/presentations/decision-models-agentic-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。