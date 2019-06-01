---
templateKey: blog-post
title: A Quick Introduction to Functional Javascript
date: 2017-09-14T14:58:45.261Z
description: >-
  Functional programming is one of the hottest trends right now and there’s a
  lot of good arguments about why one might want to utilize it in…
featuredpost: false
featuredimage: /img/1-w91eh65v6nxTs2AhLhyRNA.jpeg
tags:
 - JavaScript
 - Web Development
 - Frontend Development
 - Functional Programming
---

**Functional programming** is one of the hottest trends right now and there’s a lot of good arguments about why one might want to utilize it in their code. I’m not going to go into a lot of detail about all of the concepts and ideas of functional programming here, however I will try to provide a demonstrative guide of how to use functional programming in everyday situations involving **Javascript**.

![](/img/1-w91eh65v6nxTs2AhLhyRNA.jpeg)

> Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

## Redefining functions

Before we get into the nitty-gritty of Javascript’s functional programming paradigm, it’s important to understand what a **higher-order function** is, why it’s useful and the implications stemming from this definition. A higher-order function can take a function as an argument or return one as a result. You should always remember that **functions are values**, meaning you can pass them around, much like you can do with variables.

So for example, in Javascript, you can do this:

`gist:Chalarangelo/5d2dd39ec12566d516b2c881f4748c23#higherOrderFunctions.js`

Using the technique showcased above, you can make your code more reusable, while gaining more versatility. We’ve all been in situations where we wished we could pass a function to some other function to execute a task, but we had to write some code to work around this problem, right? Using functional programming, you won’t need any more workarounds and you can make your code significantly cleaner and easier to read.

https://hackernoon.com/why-functional-programming-matters-c647f56a7691

The only catch is that _proper_ functional code is characterized by the **absence of side-effects**, meaning that functions should rely solely on their arguments as input and they should not affect their environment in any way, meaning you should not use or alter anything outside the function itself. This, however, has some important implications, such as the fact that a function will always return the same output provided the same input and the fact that, if the result of a functional call is not used, it can be removed without causing any other changes in the code.

## Using the array prototype’s built-in methods

`[Array.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)` is where you should start when getting into functional programming in Javascript. It contains a plethora of useful methods for **applying transformations to arrays**, which is a very common use-case scenario in most modern applications.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

Starting with `[Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)` seems like a good idea, as this is a pretty straightforward transformation, which, unsurprisingly, you can use to **sort an array**. `.sort()` only takes one argument, a function that is used to compare two elements, returning a value below zero if the first one should go before the second one or a value above zero if the opposite is true.

Sorting sounds very simple, until you run into a scenario where you need to compare something more complex than your usual numbers array. For this example, we will have an array of objects, the weights of which are either in pounds (_lbs_) or kilograms (_kg_) and we need to sort them in ascending order based on weight. Let’s look what this would look like:

`gist:Chalarangelo/13fe74aaf5d0fcf434249db88593f0dc#arraySortExample.js`

In the above example, you can clearly see how using a higher-order function can save you space, time and make your code easier to read and more reusable. If you were to write this without using `.sort()`, you would have to write two loops and repeat the logic for the most part, resulting in longer, bloated and frankly less understandable code.

Sorting isn’t the only thing you do often in a array. In my experience, f**iltering an array** based on a property is pretty common and what better way to filter an array than `[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)`. Filtering is not difficult, as you only need to pass a function as an argument, which will return `false` for any items that need to be filtered out, otherwise it will return `true`. Simple, right? Let’s see it in practice:

`gist:Chalarangelo/5a21fe35c3289b7263f340fe1d8eb127#arrayFilterExample.js`

While `.filter()` returns all the elements in the array that match a condition, you can also use `[Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)` to get only the first element in the array that matches a condition or `[Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)` to get the first matched element’s index in the array. Similarly, you can use `[Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)` to test if at least one element matches a provided condition and `[Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)` to see if all elements of the array match a condition. These can be particularly useful in some kinds of applications, so let’s have a look at an example using a combination of these methods:

`gist:Chalarangelo/b29b6967d0b339e4f6bd3672ecb1b82d#arrayTransformations.js`

At this point everything should start coming together. In the above example, you can clearly see how higher-order functions spared you a lot of repetitive and difficult to understand code. Even in this very simple example, you can see how legible the code is, in contrast to what you would write if you didn’t use the functional programming paradigm.

Taking a step back from the complex logic of the previous example, we sometimes want to just **transform an array to a different one** with more or less fields, without altering the data all that much. Here’s where `[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)` comes in, allowing us to transform the objects in an array. The difference between `.map()` and the previous methods is that the higher-order function that it uses as its argument should return an object, which can be pretty much anything you want. Let me demonstrate with a simple example:

`gist:Chalarangelo/1ca9a233ee953353b02389b2a8d1a81f#arrayMap.js`

In the above example, by applying `.map()` to our array, we easily got an array, the objects of which only contain the desired properties. In this case we only wanted the string representation of the objects’ `name` and `surname` fields, thus we created an array of strings from an array of objects, using a simple mapping. Mapping is more common than you might think and it can be a very powerful tool in every web developer’s arsenal, so if there’s one takeaway from this article is that you should learn how to use `.map()`.

Last, but definitely not least, you should pay attention to the **general-purpose array transformation** that is `[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)`. `.reduce()` is slightly different from all the other methods mentioned above, as it uses a higher-order function as its argument, as well as an **accumulator**. This might sound a little bit confusing at first, so an example should help you grasp the basic idea behind `.reduce()`:

`gist:Chalarangelo/59afa300bee8c588b8a10e4c10bc9840#arrayBasicReduce.js`

The above example should not be particularly confusing to anyone who has ever had to sum the values of an array. We first define a reusable higher-order function that we use to sum the values of each array. Then, we actually use this function to sum the values of the first array and then, using the already accumulated value of the first array’s sum as our starting value, we feed this sum to the second array summation function, so that all values in the second array will be added to that, instead of zero.

https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d

Of course, `.reduce()` can do a whole lot more than just adding up the values in an array. Most **complex transformations** that do not fit into any of the other methods can be easily implemented with `.reduce()` and an array or object accumulator. A practical example would be transforming an array of articles, each with a title and some tags into an array of tags, each with its article count and the array of said articles. Let’s see what this would look like:

`gist:Chalarangelo/45c17f5ed3f1fb17c0d91b25af9c0f3d#arrayAdvancedReduce.js`

The above example might seem slightly more complicated than it is, so let’s break it down. First off, we want to get an array as our final result, thus our accumulator’s starting value will be `[]`. Then, we want each object in the array to contain the name of the tag, the count and the actual list of articles. We also know that each tag must appear only once in the array, so we will have to check if it exists using `.some()`, `.find()` and `.findIndex()` like before to transform the existing tag’s object instead of adding a new one.

The tricky part here is that we cannot define a function to check if each one of the tags exists (otherwise we need 7 different functions), so we define our higher-order function inside the loop for the current tag. That way we can reuse it and we avoid rewriting code. Note that this can also be accomplished by currying, but I will not explain this technique in this article.

https://hackernoon.com/currying-in-the-real-world-b9627d74a554

After we get the tag’s object in the accumulator array, we need only increment its count and add the current article to its array of articles. Finally, we return the accumulator and that’s pretty much all there is to it. The code is pretty short and quite easy to understand after reading it carefully, while the corresponding non-functional code would be a very confusing and significantly longer mess.

## In conclusion

Functional programming is one of the hottest trends right now and for a good reason. It allows us to write cleaner, leaner and meaner code without having to worry about side-effects and changing-state. Javascript’s `[Array.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)` methods are really useful in many everyday situations and allow us to apply simple and complex transformations to arrays without repeating ourselves.