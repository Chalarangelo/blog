---
templateKey: blog-post
title: 5 reasons to try out mini.css
date: 2017-05-17T07:17:34.373Z
description: >-
  In this article, I am going to explain why mini.css is a worthwhile addition
  to the CSS framework ecosystem, as well as the types of projects that will
  most benefit from using it.
featuredpost: false
featuredimage: /img/1-xvh39qexnrcgex8-vohs7a.png
tags:
  - mini.css
  - ''
---
In this article, I am going to explain why [mini.css](http://minicss.org/) is a worthwhile addition to the CSS framework ecosystem, as well as the types of projects that will most benefit from using it.

![](/img/1-xvh39qexnrcgex8-vohs7a.png)

## 1. Small size

The main selling point of mini.css is the fact that it is made up of a single CSS file, under **7KB gzipped**, which is a lot lighter than many of its full-featured competitors. However, it’s not really a micro-framework in the sense that it does offer a lot more than just basic styling, with full-fledged modules that can support complex website design and UI patterns.

If you’re not really into micro-frameworks, let me put this into perspective: Have you ever wanted to read an article or view some content online, while on your phone on a slow connection, only to find out that the website took forever to load and you eventually quit trying to view the page? That’s what doesn’t happen when websites use a micro-framework to create their UI and style their content!

![](/img/1-v0zajf68spuwk7bo-ousda.png)

Apart from that, keep in mind that, as the Internet-of-Things becomes a reality, the need for lighter websites is more pressing than ever. The best way to make your website lighter without cutting out anything necessary is to optimize the UI style and layout, both of which can be done using mini.css’s [modular architecture](http://minicss.org/modules.html).

## 2. Works on all devices

Mobile-friendliness is a must for any website and mini.css aims to solve the problem with responsive grids, cards and navigation that will entirely change your website’s layout on mobile to deliver a better content-centered experience, while the UI doesn’t get in the user’s way.

![Responsive layout on different devices](/img/1-sp6dv6zw9lr7kpl-bltvq.png "Responsive layout on different devices")

Certain components, such as toast messages and hamburger menus are built with mobile in mind, delivering a more feature-rich user experience on mobile, one that is very similar to a native mobile application. Paired with something like [Service Workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers), mini.css can be the base building block for progressive web apps that feel a lot like native ones.

Apart from mobile-friendliness, accessibility is another key concern as of late, one that many frameworks have trouble addressing. While not perfect, mini.css provides accessible solutions to common problems wherever possible, while many of the features are built based on the accessibility guidelines instead of the other way round.

## 3. Extensive documentation

Most frameworks give you an overview of what they can and can’t do and a list of components that you can use and that’s about it. But many developers need more than that, a lot more. Documentation has to be as extensive as possible, even if some things seem trivial to the maintainers and developers of the library.

The approach that mini.css takes is to document every possible design pattern very clearly and consistently, providing basic and advanced usage examples of every single component, while adding best and worst practices in the form of dos and don’ts, making it easier for newcomers to understand how they should use the framework and all of its parts. A handy [cheat sheet](http://minicss.org/quick_reference.html) is also provided to help experienced users find exactly what they need in a pinch.

![Multiple examples are provided for every component](/img/1-kll5vjda3ovfzscoxw69iw.png "Multiple examples are provided for every component")

Additionally, a handful of [templates](http://minicss.org/templates.html) is also provided on the framework’s website, as well as a [demo website](https://codepen.io/chalarangelo/project/editor/DzvxKa/) built using Codepen Projects to better showcase usage of the framework in real-world examples.

## 4. Easy to customize

Much of the criticism I’ve read against CSS frameworks is the lack of customization and the generic-looking color palettes and styles provided. While that is unavoidable in many cases, as people prefer convention over configuration, mini.css provides more than one default style in the form of [flavors](http://minicss.org/flavors.html), letting developers choose a theme that is more to their liking, mitigating the damage done by using it, at least to some extent.

![Flavors can provide customization out of the box](/img/1-w0srd1oczia7jt3fwjkesg.png "Flavors can provide customization out of the box")

For those who want to fully customize their brand’s website, the [documentation for customizing](http://minicss.org/customization/index.html) the framework’s various modules is fairly extensive, making it easier to understand the inner workings of the codebase. Changing colors, spacing and screen breakpoints is really simple and, as soon as you are happy with the result, you can easily make it into a flavor for others to use.

If you are a power user and want a framework that lets you change literally everything, mini.css allows you to tweak hundreds of variables down to the naming conventions of classes, so that you can retrofit it on old websites or customize it to your CMS of choice.

## 5. Built for the future

Many CSS frameworks are built to work well on legacy browsers and support outdated technologies and design patterns. mini.css on the other hand, uses the latest CSS technologies as soon as they’re well enough supported in order to deliver a modern experience on all devices, while keeping legacy features to a minimum, ensuring that old browsers can display a website that might not look as great, but is at the very least serviceable.

At the heart of the framework’s design is the [Flexbox module](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), enabling complex design patterns that are responsive and scale well on all screen sizes. Features like CSS calculations and image cropping are also used to make websites feel like they’re designed in 2017.

https://medium.com/learning-new-stuff/learn-css-flexbox-in-3-minutes-c616c7070672

Sure, certain projects will shy away from this modern approach, as they need to fully support Internet Explorer and certain proxy browsers on mobile, however, the future has no need for legacy support and, as time goes by, more and more websites will not have to support obsolete features and patterns, thus making mini.css a better choice for the long run.

----
If this article picqued your interest, be sure to check out the framework’s [website](http://minicss.org/) and [repository](https://github.com/Chalarangelo/mini.css), as well as share your opinion and critique in the comments below.
