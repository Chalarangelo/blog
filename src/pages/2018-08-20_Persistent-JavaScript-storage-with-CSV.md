---
templateKey: blog-post
title: Persistent JavaScript storage with CSV
description: >-
  While most programmers would argue that JSON is the preferred file format to
  persistently store JavaScript data, there is still value in…
date: 2018-08-20T08:26:01.216Z
featuredpost: false
featuredimage: /img/1-b9KNC7Ucvb9EZI-ugD8QOQ.png
tags:
  - JavaScript
  - Web Development
  - ES6
  - Node
---

While most programmers would argue that JSON is the preferred file format to persistently store JavaScript data, there is still value in using other formats to store data. CSV is one of those formats that have been around for a long time and are dead simple to use in most cases. However, while JavaScript provides native methods to serialize and deserialize JSON objects ([`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)), there is no such functionality built-in for CSV files, so in this article I will try to implement said functionality in ES6.

## Convert an array to CSV

The first and arguably simplest piece of code we need to write in order to use CSV with JavaScript is a serializer that converts a 2D array into a CSV file:

![Image by Daniel Funes Fuentes on Unsplash](/img/1-b9KNC7Ucvb9EZI-ugD8QOQ.png)

The above code is pretty straightforward. It uses [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`Array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) to combine each subarray into a string, separating the values based on the `delimiter` provided, then uses [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`Array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) a second time to create a multi-line string, our CSV output, with all the array’s data.

## Convert CSV to an array

Serializing an array is easy, but say you have a CSV file and want to convert it back to an array. In that case, you need a deserializer that reverses the above process:

![Image by onald Smeets on Unsplash](/img/1-5mvZdTfK6aX-q23Lr3_LtA.png)

The procedure here is essentially the same as before, but backwards. The file is separated into lines using [`String.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), then converted into individual values using [`String.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) a second time based on the `delimiter` provided. A finishing touch is to allow the user to decide if the want to omit the first row, as sometimes CSV files use the first row to store column names.

## Convert CSV to an array of objects

Based on the last remark from the above snippet, we can easily figure out a way to convert CSV files to an array of objects, using the first row as the property names:

![Image by Jeremy Bishop on Unsplash](/img/1-mrGD3YbTuEZXHO1aqPjKKw.png)

This is starting to get more complex now. The first thing we have to do is obviously grab the property names list from the first row, similarly to what we did before, using [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). Then comes the object creation part, which is done using [`String.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) as we did before. The only major difference is that we use [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to create an object for each row of values in the CSV file with proper key-value pairs. And voila! We have an array full of JavaScript objects that we can now use.

## Convert an array of objects to CSV

Here comes the trickiest part — serializing an array of objects. Why is this tricky and complicated? Because sometimes you have objects with a different number of properties or whose properties are in a different order. And that creates a few problems when trying to serialize into a uniform structure like CSV.

There are plenty of ways to remedy this, such as making certain assumptions about structure, ensuring that objects have the same number of properties etc., but the most versatile function I could write requires the developer to specify which properties need to be serialized:

![Image by Leonardo Wong on Unsplash](/img/1--xrqJ0qsF4fOgh3gHWfZ6w.png)

It might not look like much, but there’s quite a lot going on here. First off, we need to create an array of lines for the CSV string and set the first row equal to the list of properties we want to serialize from the array of objects. Then, we use [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to create each row, with properties in the correct order and empty values for non-existent properties. Finally, we use the spread operator ([`...`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) and [`Array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)` to output a multi-line CSV string.

## Considerations and improvements

While this was a quick guide on how to use CSV with JavaScript, there’s a lot more one can do with this data type. Note that all the snippets above are not fully optimized and might not handle edge-cases, so one could start from there. Another issue is that there’s a bit of inconsistency between serialization and deserialization, so this could also be dealt with. Finally, nested objects or arrays cannot be serialized with any of these snippets and CSV doesn’t natively support them, so custom data structures for nesting could be created to deal with that.