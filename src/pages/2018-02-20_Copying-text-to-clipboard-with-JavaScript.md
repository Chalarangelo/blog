---
templateKey: blog-post
title: Copying text to clipboard with JavaScript
description: >-
  In this article, I will be explaining in depth how the copyToClipboard snippet
  from 30 seconds of code works. You can find the source code…
date: 2018-02-20T15:11:21.284Z
featuredpost: false
featuredimage: /img/1-f2eZ4JeqO2TMkuNwwVN4gg.png
tags:
  - JavaScript
  - Web Development
  - ES6
---

_In this article, I will be explaining in depth how the_ `_copyToClipboard_` _snippet from_ [_30 seconds of code_](https://github.com/Chalarangelo/30-seconds-of-code) _works. You can find the source code for it and a ton of other useful methods in the project’s repository._

![30 seconds of code: Javascript snippets that you can understand in 30 seconds or less](/img/1-f2eZ4JeqO2TMkuNwwVN4gg.png)

## Core functionality

One thing that comes up quite often in [website building](https://hackernoon.com/tagged/web-development) is the ability to copy some text to clipboard, without the user selecting it or hitting the appropriate key combination on their keyboard. [Javascript](https://hackernoon.com/tagged/javascript) can easily do this in five short steps:

1.  Create a `<textarea>` element to be appended to the document. Set its `value` to the string that we want to copy to the clipboard.
2.  Append said `<textarea>` element to the current HTML document.
3.  Use [`HTMLInputElement.select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select) to select the contents of the `<textarea>` element.
4.  Use [`Document.execCommand('copy')`](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands) to copy the contents of the `<textarea>` to the clipboard.
5.  Remove the `<textarea>` element from the document.

The simplest version of this method should look like this:

`gist:Chalarangelo/65320a1953388d0042829ac1fb989e33#copyToClipboard.js`

Bear in mind that this method will not work everywhere, but only as a result of a user action (like inside a `click` event listener), due to the way `Document.execCommand()` works.

## Making the appended element invisible

If you try out the above method, you will probably see some flashing, when the `<textarea>` element is appended and then removed. This problem is especially bad for people on screenreaders, as it can cause some really annoying issues. So, the next logical step is to use some CSS to make this element invisible and make it `readonly` in case the users try to mess with it:

`gist:Chalarangelo/99e7cbee0de3c94f0077bb7555110767#copyToClipboard.js`

## Saving and restoring the original document’s selection

The final consideration is that the user might have already selected some content on the HTML document, so it would be nice to not remove anything they might have selected. Luckily, we can now use some modern Javascript methods and properties like `[DocumentOrShadowRoot.getSelection()](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection)`, `[Selection.rangeCount](https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount)`, `[Selection.getRangeAt()](https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt)`, `[Selection.removeAllRanges()](https://developer.mozilla.org/en-US/docs/Web/API/Selection/removeAllRanges)` and `[Selection.addRange()](https://developer.mozilla.org/en-US/docs/Web/API/Selection/addRange)` to save and restore the original document selection. Here’s the final, annotated code implementing these improvements:

`gist:Chalarangelo/4ff1e8c0ec03d9294628efbae49216db#copyToClipboard.js`

And that’s pretty much all there is to it. In less than 20 lines of code, we have created one of the most commonly needed methods in frontend development.