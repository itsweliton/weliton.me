---
title: "How to solve problems as a developer"
pubDate: 2021-05-17T15:16:18.188Z
category: 'tech'
description: "O melhor time do ponto de vista de um desenvolvedor."
author: "Weliton Soranzo"
image:
  url: "https://astro.build/assets/blog/astro-1-release-update/cover.jpeg"
  alt: "The Astro logo with the word One."
tags: ["astro", "blogging", "learning in public"]
---

As Developer sometimes we face the well known issue of being blocked not knowing exactly where to go, it can be a bug, a complex and difficult task that is beyond our comprehension. 

It doesn't matter, there'll be a time where we'll get stuck, so what can we do to make things work out in this scenario?

If you're a junior developer who's just starting in the tech world this can be even more frustrating and it's totally comprehensible, you're learning new tech, everything is so amazing and you want to build neat stuff. 

But getting stuck makes you feel powerless or incapable of solving things, sometimes this can even lead to a frustration path of thinking you're not good enough.

At those moments you must understand that in the tech world, problems happen (I would go even further and say problems happen everywhere 🤷🏼‍♂️) and that's totally ok, it doesn't matter if you're working alone or with a team, this is natural.

Ok, I guess you get it by now, shit happens, but how can we handle problems when working as developers? 

**If you work alone in a project all by yourself, and do not have any same level colleague nor a senior developer to support you, that's ok!**

*I have worked as a single developer many times and I guess those times were the ones that made me most frustrated when facing some "dev problems", since I was completely lost and there was no one who I could ask for help. 
// yeah I know little dramatic XD* 

**If you work with a team, and you're new, that's ok too!**

*I have also worked in teams with other colleagues and I also had problems asking questions and trying to clarify things with them, it's hard to talk with new people and expect them to answer your doubts. But that's ok, just go for it, they'll help you, sometimes it might be harsh at first, but you can do it!* 

Ways to handle your problems

- **Focus in understanding the core concepts**, lets assume you have a code like this:

    ```jsx
    Game.prototype.restart = function () {
      this.clearLocalStorage();
      this.timer = setTimeout(function() {
        this.clearBoard();   
      }, 0);
    };

    // Uncaught TypeError: undefined is not a function
    ```

  Looking over it, everything looks fine: the syntax is correct and the code makes sense.

  However, there is a common mistake related to the this keyword and inner functions.
  
  It would be good start to learn about it (google something like `how this works + js`), this will help you to learn a lot while looking for solutions.

- **Google it,** this one is kinda obvious, with the correct search you might find some good answers from people who have been in the same issue as yours. 

  To do good searches, I recommend that you create queries to google like this:

  Let's assume you're having problems with CORS in your Frontend web app, you could search for a solution like that `CORS error + js` and it's most likely the top links will be 

    ```jsx
    - developers.mozilla.org
    - stackoverflow.com
    - dev.to
    ```

    If you're new to googling solutions related to tech stuff probably those websites will have solutions or at least some discussions that can help you.

- **Writing your problem down** in some paper. Detail the steps of the feature/bug, try to understand the bigger picture, break the feature into small more simple pieces ([this is a well-known process](https://news.uga.edu/break-large-tasks-down-into-smaller-more-manageable-pieces/)). 

  After that to put everything back together, I'm sure you'll have a more clear understanding of your problem and how to approach it.

- Try **talking to something,** yes I mean it, explain what's going on and be as detailed as possible, this technique is called [Rubber duck debug](https://en.wikipedia.org/wiki/Rubber_duck_debugging). 

  You'll realise how much you'll understand, and even find out a solution or the ways to do a better google search just by talking with an inanimate object.

- **You might talk to someone**, there are many regional dev communities with discord/slack/telegram channels with great people of all seniorities who will be glad to help. 

  I know sometimes might be frightening to talk to people about problems, but these people might already have been through the same path, and for sure they can help you!

Let's say now, you found a light at the end of the tunnel and it isn't a train (dad's joke, sorry). You have the ways but your progress is waaay off the track. You've spent so much time looking for answers that now you're out of time! 😱 do not fear for we have a solution! 

- Find your stakeholder or boss and explain to them that the task you've been performing is way more difficult than you expected, or it is an unexpected bug
- Explain the solution you've found or propositions to solve the problem. 
  
  You know the issue is well described and you have a good knowledge of the feature overall, so it won't be difficult to show that you are focused on solving it.

    *It's even more clear nowadays that developers have a high responsibility to communicate and to be able to negotiate with their colleagues. It's an important soft skill that you can only acquire by practising. This will show you care, have ownership, and have a plan to solve problems.*

And last but not least, **Communicate**! 

Yes, that's it! Communicate to your stakeholders, your PM, boss, Leader, client, whoever you maintain contact and track of the situation, the most important thing in these scenarios is to maintain communication. 

But why? well it's simple! If you're able to inform about problems and delays early in the development chain this gives room to make a decision about whether or not to put more effort into that problem, or if it's viable to keep on doing progress on it. 

All of this can be decided with a better probability of success when identified in the early stages, either in a sprint, or any predefined period of time to work on it.

---


*I hope you've enjoyed this post and if you have any suggestions please feel free to reach me out on linkedin or twitter!*

*I also would like to thank Bruno and Giuseppe for helping me on the post revision.*

### Bye! 🤟