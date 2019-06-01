---
templateKey: blog-post
title: 'Javascript Variable Scope & Closures: A Primer'
date: 2017-09-11T19:37:31.688Z
description: >-
  Javascript might seem like a pretty approachable programming language to most
  people, however certain concepts can prove quite tricky for…
featuredpost: false
featuredimage: /img/1-23KtUDuCv_mOboccUiZGtg.png
tags:
 - JavaScript
 - Web Development
 - Frontend Development
---

![](/img/1-23KtUDuCv_mOboccUiZGtg.png)

Javascript might seem like a pretty approachable programming language to most people, however certain concepts can prove quite tricky for beginners. One of the most commonly brought-up topics is that of **variable scope** and what **closures** are, so in this artile I will try to introduce these concepts in a beginner-friendly way.

## Scope

When we talk about **scope**, we mean the visibility of one or more entities to certain parts of our code. For the purposes of this article, our entities are going to be limited to variables.

There are two types of scope in Javascript: **global** and **local**.

**Global scope** is pretty straightforward: Any variable defined outside any function or curly braces is part of the global scope and can be accessed from anywhere in the code.

**Local scope** is slightly more complicated. Any variable defined inside a `function` declaration or curly braces can only be accessed inside the function or block of code it was declared respectively.

Okay, this is basically all you need to know about variable scope. Let’s look at some simple examples:

`gist:Chalarangelo/de3ce23e3eeea0434bd132455c5ee035#globalVariableExample.js`

`gist:Chalarangelo/2355daf802c02dfb9492f3c7c59616ca#functionScope.js`

`gist:Chalarangelo/c527a92224c15e46edfb4e0807ef30fc#blockScope.js`

Block scope and definitions using `var` and `let` might seem slightly confusing at first, but I recommend you read [A guide to Javascript variable hoisting with let and const](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d) (3 min read) and carefully study [MDN’s documentation of the](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) `[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)` [keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) to clear up any remaining questions and doubts.

https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d

## Closures

**Closures** are one of those things that might seem confusing at first, but really aren’t. A function defined inside another function is a closure. Closures are particularly useful when you want to access a variable defined inside a function’s scope from outside the function.

A practical use of closures could be defining a public set of functions that can get or set some private variables inside a function (which is a pretty common use-case in object-oriented programming). Here’s a pretty simple example of closures in action:

`gist:Chalarangelo/d4eb611125364c72e1fdcb17fda5bb08#closureExample.js `

## Summing up

**Scope** refers to a variable’s accessibility. It can either be public (defined outside any functions and curly braces and accessible anywhere in the code) or local (defined inside a function or block and accessible only inside said function or block). **Closures** are functions defined inside other functions and can be used to access a function’s private variables from outside its own scope.