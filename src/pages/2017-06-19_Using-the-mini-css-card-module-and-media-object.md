---
templateKey: blog-post
title: Using the mini.css card module and media object
date: 2017-06-19T22:10:58.884Z
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

**Difficulty:** Beginner (it’s recommended that you read the [previous article](/2017-06-09-designing-a-simple-web-page-with-mini-css/) in the series first)

https://blog.chalarangelo.me/2017-06-09-designing-a-simple-web-page-with-mini-css/

## Content presentation

This time around, we will be focusing on the web page’s content and how to make it look more like a social media. To accomplish this, we will use the [Card](http://minicss.org/card) module, which allows us to easily create containers that wrap around our content. There are quite a few cool stunts we can pull off with cards, but we’ll talk about that in a minute.

First things first, we need to familiarize ourselves with the syntax of the card component. To create a card, you use the `.card` class and, to make everything look as intended, you wrap content inside it into one or multiple `.section` containers. Cards also require to be wrapped in a `.row`, so we have to apply that class to the parent element of the `.card`. That’s all there is to it, except that we also want to make our cards `.fluid`. This might sound like a lot, so let’s summarize what we will be doing for our layout:

*   Add a `<div>` element that will wrap the content of the page (that is the `<h3>` and `<p>` elements) to which we will apply the `.card` class. This is our content card.
*   Next we will turn the `<h3>` and `<p>` elements into `.section`s, which give them a better look and make them fit nicely on our card.
*   Finally we will make the parent element of the `.card` a `.row` and we will apply the `.fluid` class to the card to make it fit the available area.

You can try doing this yourself or you can just take a look at the following codepen!

https://codepen.io/chalarangelo/pen/WOpJOQ

## Using media

Creating a card-based layout has many benefits, some of which might not be apparent from the above example. To better showcase the capabilities of cards, we will be creating two different layouts, both of which will be using media to spice up our page.

The first one will be using a set of non-fluid cards (6 seems like a good number that fits our layout well), along with the `.section.media` class to create media-centric cards. We will also be applying the `.small` class to the `.card`s to make them smaller in size (_duh!_). The media sections of the cards will fit any image size, so we don’t have to worry about getting the _right_ cat images, just any cat images we can get our hands on.

To make everything even more neat, we will be applying some custom css to the parent `.row` element. Nothing particularly demanding, just `justify-content: center;`, which will center the content no matter the width of the area.

https://medium.com/learning-new-stuff/learn-css-flexbox-in-3-minutes-c616c7070672

_If you haven’t already, I strongly suggest you check_ [_Per Harald Borgen’s article on CSS Flexbox_](https://medium.com/learning-new-stuff/learn-css-flexbox-in-3-minutes-c616c7070672)_, as it will provide you with a basic understanding of the syntax, which will prove a useful asset if you plan to work on anything web-related._

So, after it’s all said and done, what does it look like?

https://codepen.io/chalarangelo/pen/NgpMBN

As always, the above design is responsive and will display properly on any and all devices. On a side note, we settled on six cards as our showcase number, as they will fit quite nicely on any screen size (single column for smaller screens, two columns on medium-sized ones and three columns on larger screens), leaving no ca(t)rd behind and giving an overall feeling of polish to our Catbook layout. However, if you have a very large monitor, there are chances that more than three cards will appear in one row spoiling all the fun, but let’s be optmistic here.

## The media object pattern

As promised, we will be exploring another layout, one that uses the (in)famous [media object pattern](https://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/). A media object is what we see almost everywhere nowadays, from Facebook and Twitter to the story link previews here on Medium. It’s basically some sort of media (95% of the time it’s an image) displayed side-by-side with some textual content (usually a title and some text).

The media object pattern is so common that mini.css has a [separate section about it](http://minicss.org/grid#media-object), even though it’s not really a component of its own. For our little demo we will be combining cards with the grid module to effectively create a media object. Let’s take it one step at a time:

*   Create a `.card`, make it `.fluid` and make sure the parent container is a `.row`. Add a single `.section` in your card and inside it add a `.row` element. This will serve as the outter container for your media object.
*   Create two columns inside the `.section.row` you just created. The first one should be smaller than the other, but you can experiment with different layouts and see what you like best. If you don’t remember how to use the Grid module, you can check the [framework’s official documentation](http://minicss.org/grid) or watch the following interactive screencast by [Per Harald Borgen](https://medium.com/u/30d952e8c7e6).

*   Inside your first column, you should add an `<img>` element, which will be the _media_ part of your media object. In the second one you can add a heading and some text.
*   Finally, you can nest a second media object element inside the second column of the first one, making it look like a reply or a comment.

Take the time to follow the steps above and create your own layout. When you’re done, you can see how mine turned out!

https://codepen.io/chalarangelo/pen/yXMEMj

Apart from the things discussed above, I took some time to tweak a few aspects I didn’t particularly like and to also make the design pop out a little bit more, by adding some shadows and making the cat images into circular profile pictures. Some of these tricks will be explained in further detail in later articles, but you can also read the [documentation](http://minicss.org) to find out how to utilize them in your own projects.

In the next articles in this series, we will be delving into some more advanced concepts, such as the use of [Drawers](http://minicss.org/navigation#drawer) and [Forms](http://minicss.org/input_control), which will help breathe some more life into our social media. Stay tuned!