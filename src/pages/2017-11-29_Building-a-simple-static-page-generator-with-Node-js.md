---
templateKey: blog-post
title: Building a simple static page generator with Node.js
description: >-
  Static page generators are great and super convenient when developing
  reasonably simple websites. I’ve used probably two or three out of…
date: 2017-11-29T16:27:33.880Z
featuredpost: false
featuredimage: /img/1-9wHrewC1Dyf2Au_qEqwWcg.jpeg
tags:
  - Node
  - Static Site Generator
  - Web Development
  - JavaScript
---

Static page generators are great and super convenient when developing reasonably simple websites. I’ve used probably two or three out of what seems like [a hundred that are available](https://www.staticgen.com/) right now. But using one wasn’t enough for me, which is usually the case, as I really like building my own tools to understand what’s going on behind the scenes. Therefore, today I will share with you my very own recipe to create a simple static page generator with Node.js.

![Photo by Farzad Nazifi on Unsplash](/img/1-NSN1a2xVtV1exzcD8fpzhA.jpeg)

## Step 0: List of ingredients (a.k.a. dependencies and need-to-know)

*   `npm init` — I assume most people are familiar with creating a package, so I’m not going to go in-depth about it here. If you need some guidance, take a look at the [documentation](https://docs.npmjs.com/cli/init).
*   [`npm i -s live-server`](https://www.npmjs.com/package/live-server) — Server for the generated website, supports hot-reloading. This package can be substituted for any other hot-reloading server package, but I like it a lot as it’s dead simple and gets the job done.
*   [`npm i -s nodemon` ](https://www.npmjs.com/package/nodemon)— Watches files and runs the specified tasks. We will be using this package to automatically rebuild our static website when files change.
*   [`npm i -s concurrently`](https://www.npmjs.com/package/concurrently) — Concurrent execution of scripts/tasks is pretty much needed to get everything running smoothly. I’m quite certain there’s a lot of great packages that accomplish the same thing, but I’m familiar with this specific one, so I’ll stick to it.
*   Node’s [File System Module](https://nodejs.org/api/fs.html#fs_file_system) and `[npm i -s fs-extra](https://www.npmjs.com/package/fs-extra)` — The file system module is necessary to read/write/delete files, so we will be using it for the actual generation of the static website. `fs-extra` is a nice extension on top of that, allowing you to perform some more actions, such as deleting whole folders regardless of contents, which is particularly useful.
*   [`npm i -s markdown-it`](https://www.npmjs.com/package/markdown-it) — We will be writing our page’s contents in Markdown, so we’ll use this package as a parser for them. Pretty straightforward and it has a ton of plugins, if you need them.
*   [Javascript Template Literals ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)— If you’re not familiar with template literals, don’t worry. All you need to know for the purposes of this article is that you can use backticks (`` ` ``) to write multiline strings and that using `${expression}` will replace the dollar sign and curly braces with the result of the expression inside.

https://dev.to/sarah_chima/an-introduction-to-es6-template-literals-94l

## Step 1: Create the necessary directories and files

Before we jump into the code, we need to define a structure for the whole project. Bear in mind that this is _my take_ on the subject and it’s by no means the only or best one, so feel free to make any tweaks you like:

*   **pages** directory: In this directory, I will be adding my pages, written in Markdown. These will then be converted into HTML files, using the appropriate scripts.
*   **pages\_meta** directory: I feel like generic metadata is not the best idea, so I will use JSON files inside of this directory to add metadata specific to each page. Each JSON file’s name must match the exact name of a markdown file in the pages directory, except for the file extension (i.e. `index.json` is the metadata file for `index.md`). The JSON files’ contents will look something like this:

`gist:Chalarangelo/1ea818bd50cdcee342fdf64b4dd27c39#index.json`

*   **build\_scripts** directory: This is where I will add my scripts to convert the Markdown and JSON files into HTML documents. I will use two files, a **builder.js** script, which will be the main entry point for the static page generator and a **page\_template.js**, which I will use as a template to render each page. Splitting the code into two files is probably a good idea, as it is possible that you might extend the logic in the build file to use different templates, depending on some condition, so this allows you to handle the page rendering independently from the core build logic.
*   **css**, **js** and **images** directories: These directories contain the CSS files that your pages will depend upon, scripts that they might use and images that might be displayed. All of them will be copied to the output directory.
*   **build** directory: This is the output directory of the static page generator. Your generated static pages and all the files you need copied will end up in this folder. You should not change anything in here manually, as the build script should clean up this folder before outputting each new build.

## Step 2: Set up the environment

We’re almost ready to start writing some code, but first we need to define the scripts in our `package.json`, so that we can start our static page generator. The way I set mine up is like this:

```
"build-pages": "node ./build\_scripts/builder.js",
"start": "concurrently --kill-others 
  \"nodemon -e js,json,css,md -i build -x 
  \\\"npm run build-pages\\\"\" 
  \"live-server ./build\"
"
```

First, we need the `build-pages` script to tell Node.js to run our build script. This will generate the static website from our files as soon as we write the necessary code.

The other script, `start`, is slightly more complicated. We use `concurrently` to run two processes at the same time. The first one is `nodemon`, which we explicitly have watching for changes in files with the extensions `js, json, css, md` and ignoring the `build` directory. As soon as `nodemon` sees a change, it will execute the `build-pages` script, so the static website will be rebuilt. The second process is running `live-server` from inside the `build` folder. That’s pretty much all we need to get our static page generator up and running. Now we only need to write some code that will convert the Markdown and JSON files into HTML documents.

## Step 2.5: Get a cup of coffee (Optional, but highly recommended)

If you’ve made it this far, you are doing great! In the next couple of steps, you will be writing the code that will shape your end result, so you might want to get a cup of coffee (or any other beverage you want) before you dive in.

![Coffee break](/img/1-jySYBfnqVvet2mwiUilHtA.gif)

## Step 3: Create a template for your pages

Remember that we are using `markdown-it` to render our Markdown files into HTML. However, we also need to ouput a bunch of parts of the HTML document that are not created by `markdown-it`, such as metadata and the wrapping tags for the html, head and body. We will be using our **page\_template.js** file to do this and make sure that there is no metadata missing, by creating a default metadata object inside the template.

I will not explain every little step in detail, but there’s one very important thing I want to highlight, before showing you my source code:

```
\`${pageMeta.hasOwnProperty('stylesheets')                                    
  ? pageMeta.stylesheets.length                                   
    ? pageMeta.stylesheets.map(value => \`<link rel="stylesheet" href="${value}">\`)                                   
    : ''                                 
  : this.defaultMeta.stylesheets.map(value => \`<link rel="stylesheet" href="${value}">\`)                             
}\`
```

In the above snippet, you can see how you can utilize expressions and nested template literals to create multiple elements in your final HTML document. In a nutshell, it figures out if it should use the default `stylesheets` property defined in the template or the one defined for the specific page, then proceeds to generate the appropriate tags linking to each CSS file defined in the list of stylesheets. I believe this example showcases how powerful template literals are and how much you can accomplish using them.

Having said that, the template we are creating has to deal with a few things for each page:

*   Output `<!DOCTYPE html>`, proper `<html>` tags for the start and end of the document, as well as `<head>` and `<body>` tags.
*   Output a proper `<title>`, according to the metadata provided.
*   Output all the appropriate `<meta>` tags from the metadata provided.
*   Output the list of `<script>` and `<link>` tags for scripts and stylesheets, as necessary.
*   Finally, output the HTML generated from the Markdown file inside `<body>`.

After implementing all of these features, you should end up with something similar to [my template](https://github.com/Chalarangelo/node-static-page-generator/blob/master/build_scripts/page_template.js).

## Step 4: Create the build script

You’re almost there! Now we only need to write the build script, which will put everything together, as necessary. Remember that there are multiple ways to do this and you can definitely tweak this script to create more complex websites and deal with different cases, but for now we will stick to a very basic implementation, which will only do what I consider necessary to build a static website:

1.  Load `fs-extra`, `path` and your `./page_template`.
2.  Declare the paths of your **pages**, **pages\_meta**, **css**, **js**, **images** and **build** directories relative to your `package.json` file. We will be using these to make things less confusing later in the code.
3.  Use synchronous methods, such as `[readdirSync](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options)` for everything. This will ensure our code runs from top to bottom. If you are confident in your asynchronous programming skills, go ahead and implement everything asynchronously, it’s probably more efficient anyways.
4.  Clean up the **build** directory.
5.  Loop over all the pages in the **pages** directory and store them in a list. Do the same for the metadata files in the **pages\_meta** directory.
6.  Generate each page using the Markdown and JSON files as arguments for the `generatePage()` function of the template file.
7.  Copy the **css**, **js** and **images** directories into the **build** directory as-is.

That’s pretty much all you need to do to get the build process working. If you have done everything correctly, you should end up with a build script similar to [this one](https://github.com/Chalarangelo/node-static-page-generator/blob/master/build_scripts/builder.js).

## Step 5: Get creative and build the website you always wanted

You should have a static page generator by now, if you’ve been following along. Now the fun part begins! You can customize it as much as you like, create the content you want and add all the features that you need, but couldn’t find anywhere else. There is not much you can’t do with it!

My suggestions for improving and experimenting with it:

*   Add a second template which will be applied under certain conditions.
*   Add a navigation bar, header or footer to the template file to create an application shell for your static website.
*   Tweak the [configuration](https://markdown-it.github.io/markdown-it/#MarkdownIt.configure) of `markdown-it` or add a few [plugins](https://www.npmjs.com/browse/keyword/markdown-it-plugin).
*   Convert the build script to an asynchronous one.
*   Support different formats for pages and files.

_The complete source code for this article is available on_ [_Github_](https://github.com/Chalarangelo/node-static-page-generator)_. Remember to star the repository, so you can find your way back to it later!_