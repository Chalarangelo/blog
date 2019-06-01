---
templateKey: blog-post
title: Creating a mobile-friendly navigation using mini.css
date: 2017-06-25T18:58:03.021Z
description: >-
  In this series, we will be walking through some basic ideas and techniques
  that will help you get started with mini.css, as well as understand the
  fundamental concepts behind it.
featuredpost: false
featuredimage: /img/1-xvh39qexnrcgex8-vohs7a.png
tags:
  - mini.css
  - Web Development
  - CSS
  - Web Design
---

In this series, we will be walking through some basic ideas and techniques that will help you get started with [mini.css](http://minicss.org/), as well as understand the fundamental concepts behind it.

![mini.css — Minimal, responsive, style-agnostic CSS framework](/img/1-xvh39qexnrcgex8-vohs7a.png "mini.css — Minimal, responsive, style-agnostic CSS framework")

**What we will be covering in this article:** Cards, grids and the media pattern

**Difficulty:** Intermediate (it’s recommended that you start at [the beginning of the series](/2017-06-25_Creating-a-mobile-friendly-navigation-using-mini-css) and work your way up to this article)

https://blog.chalarangelo.me/2017-06-09-designing-a-simple-web-page-with-mini-css/

https://blog.chalarangelo.me/2017-06-25_Creating-a-mobile-friendly-navigation-using-mini-css/

Assuming that you’ve been following along since the beginning, you should already be familiar with some of the more common concepts and modules of the [mini.css framework](http://minicss.org). In this article, we will take a step back and redesign our top navigation menu to be more mobile-friendly and utilize one of the more advanced components in the framework, [drawers](http://minicss.org/navigation#drawer).

If you’re not totally familiar with the concept, don’t worry. In a nutshell, a drawer menu (or a hamburger menu) is a menu that does not get in your way and can be called into view using a clickable/tappable button, sliding into the screen and revealing a navigation menu for your page. They are very popular, especially lately and particularly on mobile devices, where screen real estate is far more limited than on desktop and laptop displays. In fact, they are popular and important enough, that this article is entirely dedicated to the drawer menus of mini.css.

https://blog.placeit.net/history-of-the-hamburger-icon/

## How mini.css does it

The rise of the hamburger and slide-in drawer menus has been dramatic and many designers and developers have put their own unique spins and twists on it. What mini.css does is create a flexible enough container that can be customized to each website’s needs and that can be populated with anything from navigational elements to media content. However, the unique twist is that this menu will only appear on mobile as a slide-in drawer (unless you want it to be a drawer on all device sizes), whereas it will be a normal content container on any other display. This allows you some extra flexibility, as you can hide it, size it as you like, incorporate it in your grid or do something really complex and crazy with it (we don’t particularly recommend that, but go ahead, if you want to).

Apart from all that, the drawer is written purely in CSS (using [some pretty clever tricks](https://css-tricks.com/the-checkbox-hack/)) and can be customized even further if you tweak the [Sass variables](http://minicss.org/customization/navigation#drawer) it uses and recompile the framework. It’s also mostly accessible (a.k.a. people using screen readers can see it) and does not require lots of markup to work as needed.

## What we’ll be building

We already built a navigation for our social media for cats, however it can be friendlier and more thorough, as well as look a bit less cluttered on small-sized screens. Redesigning it will be done in two steps, mainly to avoid confusion and problems along the way.

In the **first step**, we will change our layout from the ground up, adding a column to the left for navigational elements, effectively making better use of the screen real estate. Our content will not be altered at all, except maybe pushed a little bit further to the right when there is enough space and squeezed into a less wide column.

In the **second and final step**, we will be updating _Catbook_ to incrorporate this side column into all three screen size layouts, making a drawer for the layouts where it does not fit properly on screen and allowing it to be added back into the layout when it needs to.

## Adding a navigation bar

To create a [navigation bar element](http://minicss.org/customization/navigation#navigation-bar), we will be using the `<nav>` element. Styles and customization are already built into that by the framework, so there’s not much to tweak there. To make it part of our layout, we will be removing the offset from the content column on medium and large screens and adding the navigation column before the content column, sizing it as needed. A good idea is to opt for a 3:9 ratio between navigation and content, rather than a 2:10, as this can make the navigation bar look cluttered.

All of this is pretty simple if you’ve been following along, but the problem is we have to define a layout for smaller screens. For now, we shall make it a full-width column, using `.col-sm-12` and add the `.hidden-sm` class to hide it on smaller screens. This, of course, is not optimal, but will not mess up our existing layout and can be resolved when we add the drawer into the equation.

After applying the layout described above, you shall end up with something like this:

https://codepen.io/chalarangelo/pen/LLzxgY

A few notes before we move forward:

*   First off, we used a responsive visibility helper (`.hidden-sm`), which hides a piece of content only on a specific screen size (smaller screens).
*   Secondly, you will notice that we used the `.sublink-1` class, effecively creating subcategories inside the navigation bar.
*   Finally, we altered the layout of the `<header>` as needed, so that it will not stand out in the wrong kind of way on medium and larger screens.

#### Creating the drawer

To create the [drawer component](http://minicss.org/navigation#drawer), we need to add the button that will toggle it to the `<header>` bar and turn our `<nav>` element and its wrapper into the actual drawer. In order to do this, we must do the following:

*   Add a `<label>` element with the `.drawer-toggle` class inside our `<header>`, which will act as the toggle button for our drawer menu.
*   Create an `<input type="checkbox">` right before the wrapper for our `<nav>` element and link it to the label we created.
*   Add the `.drawer` class to the left column we created in the previous step and remove the `.col-sm-3` and `.hidden-sm` classes, effectively ensuring that the drawer styling is the only one applied when the drawer is shown.
*   Finally, add a `<label>` inside your newly-created `.drawer`, link it to the checkbox you created and give it the `.close` class so that the drawer menu is closeable.
*   As an added bonus, it is recommended to add the `.hidden-sm` class to everything but the `.logo` in the `<header>`, so that mobile users will see the logo and the menu toggle only. You can also center the text of the logo, using some grid trickery, but that’s entirely optional.

After doing all of the above, you can check out how I did it in the Codepen below. I also took the time to add a couple of CSS tweaks to make it more visually appealing.

https://codepen.io/chalarangelo/pen/LLzWYp

---

That is all for today, but I think it was pretty important understanding how to properly redesign a website’s navigation to be more appealing on mobile devices. Stay tuned for more cool tricks and tutorials about [mini.css](http://minicss.org)!