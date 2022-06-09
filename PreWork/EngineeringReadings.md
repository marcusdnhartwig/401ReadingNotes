# Engineering Readings

*All notes are taken from reading material*

## Act like you make $1000/hr

- How you value your time is how you value your life

- “Pretend your time is worth $1,000/hr. Would you spend five of them doing extra work for free? Would you waste one on being angry?” -Niklas Göke

- **The truth is, most people value their time at far, far less than it’s worth They say yes to things they have no business doing. They give away their talents, attention, and effort to others who take, take, take.**

- “Most people have no clue what they are doing with their time but still complain that they don’t have enough.” -Grant Cardone, NYT best-selling author

- It takes discipline to not become “busy.”

- “The most successful people I know are not busy. They’re focused.”

- When you’re busy, you are on autopilot. You can’t see the hours slipping away, time you’ll never get back.

- **“Indeed the state of all who are preoccupied is wretched, but the most wretched are those who are toiling not even at their own preoccupations…If such people want to know how short their lives are, let them reflect how small a portion is their own.” - Seneca**

- But for most people, this “busyness” is nothing more than distraction and procrastination from what really matters. They just like feeling busy.

- For world-class performers, busyness and stress are the enemy. They’re a sign you’re off-track. It means you’ve been lazy and undisciplined, and have let too many unimportant tasks take you away from what really matters.

- Extremely successful people don’t tolerate busywork or distraction. They have crystal clear vision on their goals, and do what they need to do to get there, every single day.

- “Busyness and exhaustion should be your enemy. If you’re chronically stressed and up late working, you’re doing something wrong. Do less. But do what you do with complete, hard focus. Then when you’re done be done, and go enjoy the rest of your day.” (**IF THIS ISN'T THE HARDEST THING TO DO IN THIS BOOTCAMP I DONT KNOW WHAT IS. LOL!**)

- Do you want incredible productivity? Then cultivate extreme focus with whatever you do.

- You probably need to say “no” more.

- Every time you say yes to something, it means you’re saying “no” to a dozen other opportunities. The world’s most successful and extraordinary people say no to almost everything, but yes to a few things.

- Those few things determine their career, legacy, and livelihood.

## How to think like a programmer - Lessons in Problem Solving

- Problem solving is the meta-skill.

- The best way [to solve problems] involves **a)** having a framework and **b)** practicing it.

- “Almost all employers prioritize problem-solving skills first.
Problem-solving skills are almost unanimously the most important qualification that employers look for….more than programming languages proficiency, debugging, and system design. Demonstrating computational thinking or the ability to break down large, complex problems is just as valuable (if not more so) than the baseline technical skills required for a job.” — Hacker Rank

- “The biggest mistake I see new programmers make is focusing on learning syntax instead of learning how to solve problems.” — V. Anton Spraul **I think this is my problem**

### So, what should you do when you encounter a new problem? Here are the steps:

1. *Understand* --- Know exactly what is being asked. Most hard problems are hard because you don’t understand them.
    - This is why you should write down your problem, doodle a diagram, or tell someone else about it.
    - “If you can’t explain something in simple terms, you don’t understand it.” — Richard Feynman

2. *Plan* --- Don’t dive right into solving without a plan (and somehow hope you can muddle your way through). Plan your solution! Nothing can help you if you can’t write down the exact steps.

3. *Divide* --- **This is the most important step of all.**
    - Do not try to solve one big problem.
    - Instead, break it into sub-problems. These sub-problems are much easier to solve.Then, solve each sub-problem one by one. Begin with the simplest. Which is to say the problem you know the answer to.

4. *Stuck?* --- First off, take a deep breath.
    - The best programmers/problem-solvers are more curious about bugs/errors than irritated.
        * Debug: Go step by step through the solution trying to find where you went wrong.
        * Reassess: Take a step back and look at the problem from another perspective.
        * Research: **In Google we trust.**

5. *Practice* ---  If you want to be a good problem-solver, solve a lot of problems! Practice. Practice. Practice.

## Solving Problems - How to Solve Programming Problems

- When most programmers are given a programming problem in an interview, they make several key mistakes. The most severe of those is the **improper allocation of time.**

- The most common mistake I see when conducting interviews or watching someone try to solve a programming problem is they try to start writing code as soon as possible.

- **You must resist this urge.**

- Another big mistake is trying to over solve the solution on the first iteration.  *Keep it simple*, don’t try to get fancy.

### A simple set of steps-
    1. Read the problem completely twice. --> This is the single most important step. You may even want to read the problem 3 or 4 times. You want to make sure you completely understand the problem.  A good test of this is whether or not you can explain the problem to someone else.
        - If you dont understand the problem, you cannot solve it.

    2. Solve the problem manually --> Solve the problem with at least three different inputs to make sure you really understand your solution and that it will work for more than one case.

    3. Optimize the manual solution --> It is much easier to rearrange and reconstruct and idea or algorithm in your head than it is in code.
        - It’s well worth the effort to try and optimize the actual solution or simplify it when it is still in the most easily malleable state.
        - What you want to do here is figure out if there is another way you can solve the problem easier, or if there are some steps you can cut our or simplify.

    4. Write pseudo-code or comments --> What we want to do here is capture all the steps we created and now either put them into our editor as comments or write them as psuedo-code that we can translate to real code.

    5. Replace comments with real code -->  If you have done all the other steps, this step involves no problem solving at all. All we do here is take each comment and convert it into a real line of code.
        - If you struggle here, there are usually two possible reasons:
            * You didn’t break down the problem into small enough steps.
            * You don’t know your programming language well enough to do the conversion.

    6. Optimize the real code --> Sometimes this step isn’t necessary, but it’s worth taking a look at your code and figuring out if you can cut out a few lines or do something simpler. This is also a good place to make sure all your variables are named with long meaningful names.  I cannot stress enough how important having good names for your variables and methods is for helping the person evaluating your code to understand what you were trying to do.  This is especially important when you make a mistake!

*A few final tips*
    - If you follow this template for solving algorithm type problem, you should do very well in programming interviews, but the key to doing so is having confidence in this process.

    - The only way you are going to have confidence in this process is to practice it.  It takes a good amount of faith to believe that spending 70% of your 30 minutes to solve a problem just thinking about the problem and not writing any code is the right approach, so make sure you have that faith when you need it.

## The 5 Whys - Getting to the Root of a Problem Quickly

- The method is remarkably simple: when a problem occurs, you drill down to its root cause by asking "Why?" five times. Then, when a counter-measure becomes apparent, you follow it through to prevent the issue from recurring.

- The 5 Whys uses "counter-measures," rather than "solutions." A counter-measure is an action or set of actions that seeks to prevent the problem from arising again, while a solution may just seek to deal with the symptom. As such, counter-measures are more robust, and will more likely prevent the problem from recurring.

1. Assemble a Team: Gather together people who are familiar with the specifics of the problem, and with the process that you're trying to fix. Include someone to act as a facilitator , who can keep the team focused on identifying effective counter-measures.

2. Define the Problem: If you can, observe the problem in action. Discuss it with your team and write a brief, clear problem statement that you all agree on. For example, "Team A isn't meeting its response time targets" or "Software release B resulted in too many rollback failures." Then, write your statement on a whiteboard or sticky note, leaving enough space around it to add your answers to the repeated question, "Why?"

3. Ask the First "Why?"
    - Asking "Why?" sounds simple, but answering it requires serious thought. Search for answers that are grounded in fact: they must be accounts of things that have actually happened, not guesses at what might have happened.
    - This prevents 5 Whys from becoming just a process of deductive reasoning, which can generate a large number of possible causes and, sometimes, create more confusion as you chase down hypothetical problems.

4. Ask "Why?" Four More Times
    - For each of the answers that you generated in Step 3, ask four further "whys" in succession. Each time, frame the question in response to the answer you've just recorded.

*Try to move quickly from one question to the next, so that you have the full picture before you jump to any conclusions.*

![why.png](/assets/preworkAssets/why.png)

5. Know When to Stop
    - You'll know that you've revealed the root cause of the problem when asking "why" produces no more useful responses, and you can go no further. An appropriate counter-measure or process change should then become evident.

6. Address the Root Cause(s)
    - Now that you've identified at least one root cause, you need to discuss and agree on the counter-measures that will prevent the problem from recurring.

7. Monitor Your Measures
    - Keep a close watch on how effectively your counter-measures eliminate or minimize the initial problem. You may need to amend them, or replace them entirely. If this happens, it's a good idea to repeat the 5 Whys process to ensure that you've identified the correct root cause.

## The Super Mario Effect - Tricking Your Brain into Learning More - Mark Rober

- Do not look at failure in a negative light, you'll learn more!

- How much more can you learn if you are not concered with failure.

- Celebrate what successes you do achieve!

- The obsession is about beating the puzzle. Focusing on the task to learn more. Gamifying the program.

- Failure sucks, but what did I *just* learn.

- Reframe the challenges and learning process! ... **Is it a codechallenge or a code *game*?**

*It's not a bug, It's a feature*
![Youtube Reality](/assets/preworkAssets/YTreality.png)

- The most meaningful success is acomplishing the BEST challenges.

 1. What’s the one thing I bring to this career (and a potential employer) that nobody else can?
    - I have a very clear view of my finality. I desire to leave impact and multigenerational legacy. I have vision for that which I put my hands to 10 years from now. How many people have multigenerational vision. I want what I work on to outlast me!

 2. What are 3 things I’ll start doing to “un-stick” myself whenever I get stuck on tough piece of code, logic, or feature?
    - ¿ Did I simplify the problem ?
    - ¿ Am I treating the problem like a game ?
    - ¿ Am I prioritizing my time in the right way ?
