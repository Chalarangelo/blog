---
templateKey: blog-post
title: I abandoned React in favor of Hyperapp — Here’s why
description: >-
  Frameworks like React, Vue and Angular seem to have been all the rage this
  past year and with good reason: they make it easier to create…
date: 2018-06-27T11:21:01.586Z
featuredpost: false
featuredimage: /img/1-Kf-fIbXJJzRmS941Xe0gag.jpeg
tags:
  - JavaScript
  - Frontend Development
  - Web Development
  - React
  - Hyperapp
---

Frameworks like React, Vue and Angular seem to have been all the rage this past year and with good reason: they make it easier to create and maintain scalable web apps. Having worked with React and Vue in the past, mainly on side projects and during courses, I found them both to have quite a steep learning curve. However, out of necessity, I settled with React and Redux as my tools of choice, which I disliked the least out of the bunch.

![Photo by 广博 郝 on Unsplash](/img/1-Kf-fIbXJJzRmS941Xe0gag.jpeg)

As time went by, I realized I was constantly looking for help every step of the way when working with these tools. I even tried Vue at some point, but that didn’t work out the way I hoped either. At this point I should mention that my skill level in web development is somewhere between junior and intermediate, depending on the tech and nature of what I am building. But, as far as React, Redux, Vue and Angular are concerned, I certainly feel like an absolute beginner, even after about a year of using them.

> React is a really cool framework, but it can cause a ton of headaches, especially as your web app gets more complex.

So, I searched around a bit and, to my surprise, there is another tool I could be working with — [Hyperapp](https://hyperapp.js.org/). It’s certainly not as popular and probably a little less performant than some of the other options, but it’s a lot less complicated and can accomplish quite a lot with a tiny 1KB footprint. I was quite excited to see a framework like that, so I made a cup of coffee and sat down to check the documentation, which ultimately took me about an hour to read and understand. After that, I incorporated it into a project I was working on at work (expect an article about this sooner or later), and it turned out to be even better than it originally seemed.

https://github.com/hyperapp/hyperapp

The meticulous reader and/or React enthusiast will be asking at this point — Why exactly do you think Hyperapp is a good alternative? Here’s my reasoning:

## Straightforward API

As I read through the documentation of Hyperapp, one think became clear: The framework’s API is really straightforward and nowhere near as complex as React. Having worked with other frameworks in the past, I can confirm that remembering how Hyperapp works is a breeze compared to any of the others, due to the framework’s simplicity. This, in turn, will prevent a lot of headaches when trying to figure out that nasty bug the night before you release your web app.

## Same principles as your tools of choice

If you are used to React or Vue, Hyperapp will be very easy to get into. The core principles of it are very similar if not exactly the same as React’s and most of the things you know work very similarly, meaning you get to start using it in no time and without having to learn a lot of new things to try it out. It even supports JSX out of the box and prides itself in its capability to write components that can be easily shared and reused across frameworks.

## Virtual DOM and State Management

Hyperapp’s main selling point for me was the fact that state management is well incorporated into the framework, along with virtual DOM, both essential for developing modern web apps. This means you don’t need a tool like Redux to manage state properly, reducing your web app’s size and helping you retain part of your sanity in the process.

## Easy to maintain

What I’ve found, working with various frameworks and packages over the years, is that some of them require a lot of boilerplate code to get started. React and Redux are particularly guilty of this, as there is a lot of things you need to account for. Hyperapp, on the other hand, doesn’t require nearly as much and its code is a whole lot easier to maintain, as it doesn’t require you to skim through boilerplate code or anything as complicated and messy as a reducer. On top of that, you can read the source code of Hyperapp and understand exactly what it does, as it’s around 400 lines of code. This gives you the advantage of being able to tweak it and participate in its development, if there’s anything you don’t like about how it works.

I hope this article managed to convince you to give Hyperapp a chance and see if it works for a project you might be working on. If you like it, remember to [star it on Github](https://github.com/hyperapp/hyperapp) to help grow the community around it.

If not, feel free to comment below about your framework of choice and why Hyperapp might not be a suitable replacement.