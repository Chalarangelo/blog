---
templateKey: blog-post
title: Why you should avoid using ES6 Generators to generate keys in React
description: >-
  A few days back I started reading up on ES6 generators (or generator
  functions), a new feature that I wanted to learn and understand for…
date: 2018-09-13T09:01:01.302Z
featuredpost: false
featuredimage: /img/1-wyxuq21keffc5b0d_lMkUw.jpeg
tags:
  - JavaScript
  - React
  - ES6
  - Web Development
---

A few days back I started reading up on **ES6 generators** (or generator functions), a new feature that I wanted to learn and understand for quite a while now. In retrospect, it’s not that difficult a concept, but it might take some time getting used to how generators work. As I was reading [this fantastic writeup](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5) by [Arfat Salman](https://medium.com/u/74153188d515) (which I suggest reading before going any further), I had an idea/question:

> Can we use ES6 generators to generate keys for element collections in React?

The answer is **absolutely yes**! But should we? **Probably not**, as it has been pointed out in the comments, as this works entirely differently from what I originally expected! However, if you are interested in reading what I’ve tried and why it fails, keep going!

![Photo by Artem Sapegin on Unsplash](/img/1-wyxuq21keffc5b0d_lMkUw.jpeg)

Before we can dive into the code, I would like to introduce some key concepts (pun unintended):

**Generator:** A generator is a function that behaves similarly to an iterator. It can stop midway and then continue from where it stopped and it retains an internal state. A very simple example of a generator is a counter, which looks something like this:

```
function \ Counter() {  
  let n = 0;  
  while (true) yield n++;  
}
```

**Keys:** Keys are used by React to uniquely identify elements in collections (not strictly `<ul>` and `<ol>` lists and `<li>` elements). As far as I understand, they play an important role in how the virtual DOM diff is calculated, which would in turn affect the performance of your app. You can read up on how keys work in React on the [official documentation page](https://reactjs.org/docs/lists-and-keys.html#keys).

## Generating keys

Based on the above, it’s quite obvious how you could use a generator function to dynamically assign keys to elements in a collection. The only thing that such a function has to do is generate a context-unique key for each element. For the sake of generalizing this example for use in other places (e.g. as an element `id` generator), I am going to make each collection prefix its keys with a unique identifier as well. Here’s my take on the key generator function:

```
function * Keymaker(listName, ListComponent) {  
  let keyNum = 0;  
  while (true) {  
    let itemKey = \`${listName}\_${keyNum}\`;  
    yield props => <ListComponent key={itemKey} {...props} />;  
    keyNum++;  
  }  
}
```

There’s a couple of things happening here, which need to be explained:

*   Due to the fact that the generator function retains a state between calls, `keyNum` is used in combination with the collection’s prefix (`listName`) to generate a unique key for each element, then pass it to the element and, finally, increment the value before moving on to the next one.
*   The generator function acts as a wrapper around a component (`ListComponent`), which is passed by the collection wrapper itself. This allows the generator to be reusable between different lists and collections.

At this point, you might be wondering how to use the `Keymaker` generator, so here’s a Codepen showcasing its usage:

https://codepen.io/chalarangelo/pen/jvxZEb

The only magic happening inside the component is the instantiation of the `KeyMaker` with a prefix and a component to render for each item, followed by the subsequent calls that map each data object to a keyed element.

## Regenerating keys

That’s all there is to it — **8 lines of code** and you can forget about keying objects forever… or so I thought! As it turns out, the generator will be called again on each render, creating new keys for existing elements. Which is exactly what we do not want to happen to get any performance benefits out of it. Whoops!

This example was supposed to be a plug-n-play solution, but it ended up being more of a pattern to avoid. You can, however, modify it a little bit to utilize generator functions in other interesting ways (generating dynamic, context-unique `id` values or creating different component types based on context come to mind), especially if you assign the results to variables that will not be mutated by calling the generator every time the app renders!