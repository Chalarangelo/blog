---
templateKey: blog-post
title: Takeaways from maintaining an open source project for a month
description: >-
  A month ago, I launched my latest open source project, 30 seconds of code. It
  started out as a simple idea — a small, private collection of…
date: 2018-01-11T16:45:19.565Z
featuredpost: false
featuredimage: /img/1-f2eZ4JeqO2TMkuNwwVN4gg.png
tags:
  - JavaScript
  - Open Source
  - Projects
  - Web Development
---

![30 seconds of code  —  Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less](/img/1-f2eZ4JeqO2TMkuNwwVN4gg.png)

A month ago, I launched my latest open source project, [**30 seconds of code**](https://github.com/Chalarangelo/30-seconds-of-code). It started out as a simple idea — a small, private collection of Javascript methods that were useful to me when I was prototyping projects. After I collected about 30 of them, I decided to make the repository public and share it on reddit, see if anybody had some cool snippets they wanted to add to the collection. And then it got very popular, the community got larger by the day and new features and snippets were added all the time.

It’s been a long month of coding, discussing things, refactoring code, writing guidelines and dealing with a community that was built almost overnight. Here’s my advice, based on what I’ve learnt since the launch of the project:

## Your ideas are good

30 seconds of code is not an original idea, there are tons of curated collections, articles and libraries that target the same demographic. But people will always want more resources at their disposal, even if they are more of the same. Otherwise, we would only have lodash and nothing else. But that is hardly the case. Simple ideas can succeed and grow into something beatiful. In fact, I would go as far as argue that simple solutions to everyday problems have more potential to be successful, as they have more space to grow and pivot into something new. So, **no matter how simple your idea is, give it a shot**, it might end up surprising you.

## Love your community

The developer community can be a wonderful thing when it comes to collaboratively developing an open source project. Sharing your project with others is important as it lets people contribute and help you shape it. That can be either via feedback about it or by actively helping out in the development. Always listen carefully to what others have to say, don’t get defensive when your work is criticized and thank people for caring enough to be part of the community that’s being built around your work. **Every open source project is a huge learning opportunity** and you should treat it like one.

## You don’t know everything

Different people have different needs and skillsets and know different things. By letting people actively participate in the development of the project, I learnt a ton about so many different subjects— continuous integration, automated build processes, test-driven development, code reviews, general web architecture, licenses, styleguides. Every decision you make can shape the future of your open source project, so let people who are more experienced than you in something take the lead and listen carefully to what they have to say. Let others implement the features you can’t. Then take a look at their code and learn from it. **It is a huge relief knowing that someone else has your back** when you have no clue what to do or what the best decision is.

## Refactor early, refactor constantly

In the past month, 30 seconds of code has gone through multiple restructures, as we changed the guidelines and the structure multiple times — snippet renaming and restructuring, categorization, automated linting, multi-tagging, build process updates. If we hadn’t made each of these changes, the project would have suffered and people would complain about missing features and other problems. Some of these changes broke the project or caused us headaches, but after it’s all said and done, people are more comfortable with its structure and have fewer pet peeves about it. **All you really want in the end is for the end-user to be satisfied**.

## Know where you’re going

This might seem like it contradicts the advice above, but that isn’t the case. Having a core vision for the project and some boundaries about what you shouldn’t do is important. We got a lot of requests to create an npm package, because people wanted to grab some code and start using it in a project. But none of the snippets are production-ready and never will be. So what did we do? We published a package that will be forever in a pre-release state, never ready for production. Now, people can use it and we can monitor projects that depend on it, so that they do not use our package in production. **You can keep true to your vision, even if you compromise**.

## Don’t drive people away

A lot of the snippets that I originally wrote were pretty awful. A lot of the snippets that were added in by contributors were also problematic and required some changes before being merged into the codebase. But we kept reviewing them carefully, explaining the problems they had and thanking people for taking the time to help. This, combined with a low barrier of entry, let people join the development and help out wherever they could. Finally, after we realized that we had a lot of niche snippets, we had to do something to de-clutter the website, so we created an archive in order for people not to feel like their time was wasted. **Keeping the community around an open source alive is crucial**, as it ensures the project is alive and moving forward.

## Never stop trying

Open source projects are what drives a lot of the industry today and you have the chance to be part of any of them or start your own. Failures always come before successes — I know because none of my other projects has been so successful, even though I worked a lot harder on some of them. Never quit, never be afraid to try something new, no matter how simple it might seem to you. **Success comes when you least expect it, so keep developing and trying to achieve your goals** until you get to where you want to be!