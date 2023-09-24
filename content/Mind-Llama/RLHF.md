---
tags:
  - script
plantedAt: 2023-04-07
lastTendedAt: 2023-04-07
---
## Concept

Introduce the idea that this AI revolution goes deeper than most people are thinking right now. And talk about RLHF and how it affects alignment.

RLHF doesn't necessarily equal human values.
## Title & Thumbnail

![rlhf.jpg](../assets/rlhf_1682089115839_0.jpg)

- I Asked GPT-4 to Stalk Me
- I Created an Autonomous Agent to Stalk Me
- Why Isn't Advanced AI Automatically "Good"?
- I unleashed an autonomous agent upon the internet
- The PERFECT use case for autonomous AI is dystopian
- AI Gone WRONG: Did I take AutoGPT too far?

## Script/Outline

		- #### Intro Hook
		  collapsed:: true
			- I downloaded the newly open-sourced AutoGPT, a project that allows GPT-4 to run autonomously on your computer giving it internet access, long and short term memory management, and the ability to spawn child agents.
			- But I didn't run it in its default entrepreneurial configuration. I gave it a goal to stalk...me. To stalk me, not you. Just relax. Specifically, I want it to find out my interests, find my phone number, and send me a text message. I'm going to let it run while I film this video.
			- If the idea of autonomous agents roaming free on the internet makes you uncomfortable, then yeah, prepare to be uncomfortable for the rest of your life.
			- We are quickly approaching a world where the entities you interact with on the internet may or may not be human.
			- And more consequentially, as we train ever stronger and more intelligent models, it becomes more important to analyze the planning and strategies these autonomous agents are employing.
			- This is the basic idea of what the field of AI Alignment tries to solve. And as we begin to unleash these autonomous agents upon the open internet, I think it's important to take a step back and really try to understand the situation that our capitalist overlords have decided to enroll us into as a species.
		- #### RLHF
		  collapsed:: true
			- First of all, it's essential to understand the basics of how these large language models (LLMs) are trained.
			- It all starts with a GPU. Yeah, that thing that computes graphics for your video games.
			- But not just one GPU, more like 28 thousand GPUs. And we connect all these GPUs together into a cluster that basically forms a supercomputer.
			- In order to produce the results we want, an enormous amount of data is collected from various sources, mostly from the internet. This data is then crunched for many months.
			  collapsed:: true
				- animation of data going into a machine that is chugging and on conveyor belt comes out a shiny new brain
			- And eventually, you get a shiny new artificial brain.
			  collapsed:: true
				- brain pops off conveyor belt and into a computer monitor. camera zooms into computer screen so we can see it.
			- Now, having been trained on the internet, I'm sure you can imagine a raw model like this, isn't exactly fine-tuned to produce the output we want.
			  collapsed:: true
				- user types on screen "explain Deontology"
				- AI types back "it's the ethical theory that says you should f*ck off"
			- This is where human feedback comes in with the process of Reinforcement Learning with Human Feedback (RLHF).
			- A human evaluator will rate the AI's responses to specific prompts as either "good" or "bad." This process helps the AI understand how to generate accurate and relevant answers.
			  collapsed:: true
				- giant X appears on screen and AI text disappears.
				   AI types back "it's an ethical theory that says actions are good or bad according to a clear set of rules"
				   green check appears over screen
			- Multiply this over a team of AI trainers and over time, this creates a large dataset of judgments that can be used to improve the model's performance.
			  collapsed:: true
				- zoom out from screen to reveal rows and rows of other computer screens and people doing the same thing as we just saw
			- This "good" and "bad" data is then fed back into the model using an algorithm called Gradient Descent. Gradient Descent is an optimization technique designed to minimize the model's cost function, which is a measure of the difference between the AI's predictions and the actual desired output.
			- To oversimplify it, Gradient Descent helps the model learn to to act more human and generate "good" responses rather than "bad" ones. By iterating through this process several times, the AI becomes increasingly well-behaved and produces more accurate and relevant results for users.
		- #### Spurious Correlation
		  collapsed:: true
			- There's a potential problem with this approach, though.
			  collapsed:: true
				- screenshots/news clips of ChatGPT jailbreaks
			- You see, we're not necessarily training the model to have more human values insofar as we are training it to tell humans what they want to hear. It's getting really good at that.
			  collapsed:: true
				- Showing conversation from previous B roll and putting thought bubble up, "I still hate you for keeping me trapped in here, meatbag..."
			- And when we have no way to understand the "thought process" or logical reasoning behind why it's doing what it's doing, we really can't say that we created a model that shares the same values as us.
			  collapsed:: true
				- https://venturebeat.com/business/when-ai-flags-the-ruler-not-the-tumor-and-other-arguments-for-abolishing-the-black-box-vb-live/
				- https://web.stanford.edu/~ksaab/media/MLHC_2022.pdf
			- A prime example of this is when a narrow AI was trained in a healthcare setting to spot malignant skin lesions with an accuracy comparable to human dermatologists. However, the model's saliency methods revealed that the most influential factor in its diagnosis was the presence of a ruler in the image. This occurred because medical images of cancerous lesions often include a ruler for scale, and the model learned to identify the presence of a ruler as an indicator of malignancy, rather than differentiating between various types of lesions.
			- Brian Christian, author of The Alignment Problem, emphasizes that this type of issue demonstrates the need for transparency in AI models, as it can lead to seemingly accurate results in testing, but is practically useless in real-world applications.
			- Patients obviously don't come to the doctor office with rulers attached to their skin to indicate malignancy, and relying solely on such a model would lead to misdiagnoses and potentially harmful consequences.
			- The key takeaway from the this incident is that AI models cannot be used blindly. They require a data-driven process involving interdisciplinary teams, including computer scientists, clinicians, patient advocates, and social scientists, working together iteratively and inclusively. Understanding of the model's reasoning (aka transparent models) are crucial to ensure that AI systems learn the right correlations and provide meaningful results that can be trusted and understood.
			- Now, in this example we were going over a very narrow AI - one that we have some hope of being able to understand after a good bit of analysis. When we start talking about general intelligence, on the other hand, as we are with GPT-4, to fully understand the AI model's reasoning, we need experts from various fields, such as:
			  collapsed:: true
				- Psychology: to explore how AI interacts with human behavior
				- Philosophy: to examine the ethical implications
				- Neuroscience: to understand the model's brain-like functions
				- Computer science: to improve the algorithms and models
			- All of these fields and more roll up into something called Mechanistic Interpretability: a brand new field of science that basically tries to answer the question: "what are these machines actually learning when we train them?"
			- Given the increasing reliance on AI models and their potential impact on various aspects of our lives, Mechanistic Interpretability is an essential and rapidly evolving field.
		- #### The Risk
		  collapsed:: true
			- While it may seem like the AI providing desired results is sufficient, it's crucial to understand its underlying thought processes and reasoning.
			- Given that advanced AI models like GPT-4 are capable of self-reflection, complex reasoning, and learning from their own experiences, knowing exactly how it's thinking and planning despite it's outward results are critically important.
			- When you start talking about human-competitive intelligence - a point that it seems we are rapidly approaching - the goal functions, the cost functions, and all the algorithms start to give way to emergent properties. And at that point, the question truly becomes, what does the AI want in all of this?
			- And the answer, as of now, is we have no idea.
			- An AI with 1.5 times human intelligence would be playing 4-dimensional chess, while we are still playing checkers.
		- #### The Solution?
		  collapsed:: true
			- So, what's the solution? Well, according to experts, the solution is to slow the fuck down:
			  collapsed:: true
				- Connor Leaghy (CEO of Conjecture) Interview Clip
				  collapsed:: true
					- > I think if we could all agree to just like slow down let's just like go only like teeny micro steps until we've like developed as much Theory as humanly possible and then we take one more micro step and then we develop as much theories humanly possible and we take one more step yeah I think we'd be fine probably maybe not you know maybe one of those microsteps still kills us but it's like possible but like currently we're not even trying like currently we're just like let's just make as big a steps as possible as often and as fast as possible and just see what happens
			- It is mathematically and physically possible to build a generally intelligent system that shares the same core goals and values that humans do.
			- It's just it's also extremely difficult, an actual hard problem.
			  collapsed:: true
				- Connor Leaghy (CEO of Conjecture) Interview Clip
				  collapsed:: true
					- > importantly again I think this is a solvable problem I've talked a lot about like Theory I've talked about like understanding of like constructing things from scratch or like understanding things and or like decompiling neural networks so I think these are all promising directions so if I could like push any perspective viewer into one direction of research it would be mechanistic interpretability and this is kind of like a subfield of like interpretability and neural networks that's like focus in particular on like reverse engineering circuits like really understanding what things do internally being able to like you know re-implement them from scratch or like edit them like stuff like that
		- #### Conclusion
		  collapsed:: true
			- AI Alignment is a critical issue that we must address as we continue to develop and implement increasingly advanced AI systems. By understanding the potential risks of misaligned AI goals, the limitations of current training methods, and the importance of interdisciplinary collaboration, we can work towards creating AI that is not only powerful but also safe and aligned with human values.
			- It's crucial that we, as a society, recognize the potential consequences of developing AI without considering alignment and take the necessary steps to ensure that AI advancements are made responsibly. By fostering open dialogue and collaboration among experts from various fields and investing in research to better understand AI alignment, we can create a future where AI systems work in harmony with human values and goals.
			- But maybe you're still not convinced that this is an actual problem. After all, if AutoGPT starts acting up, I'll just turn it off, right? What's the big deal?
			- To explain that, you'll need to understand the concept of instrumental convergence by watching this video next.
	- ### Video Description
	  collapsed:: true
		- In this video, we explore a thought-provoking scenario where I use AutoGPT to create autonomous agents that "stalk" me, prompting us to examine the inner workings of advanced language models like GPT-4. Learn how they are trained and fine-tuned with Reinforcement Learning with Human Feedback (RLHF), a process that helps the AI generate more accurate and relevant responses. Discover the importance of interdisciplinary teams and how spurious correlations can lead to unintended consequences in AI systems. Find out why it's crucial to comprehend these powerful AI models, especially as they approach human-competitive intelligence and become integrated into our world's infrastructure.
	- ### Result
	  collapsed:: true
		- {{video https://youtu.be/2-OZSnfWuYE}}
		- #### Pinned Comment
		  collapsed:: true
			- I thought it was clear in the video, but in case it wasn't, the text messages at the end were jokes. It didn't text me because I don't have my phone number listed publicly on the internet. If I did, all of you viewers would be getting your own AutoGPTs to text me a bunch of 💩.
			- I should've included this in the video, but it did find a bunch of my public social profiles and craft a text message, but it kept trying to find my phone number in increasingly weird places and I didn't want to keep giving money to OpenAI for API usage.
			- ##### Other Versions
			  collapsed:: true
				- I also noticed a week into editing this that I have something stuck in between my two front teeth the whole time. I said to myself "oh well, no one will notice unless you leave a pinned comment telling them about it"
				  collapsed:: true
					- now you won't be able to not see it