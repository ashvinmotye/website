---
slug: "/blog/css-backdrop-filter"
date: "2021-08-18"
title: "CSS backdrop-filter"
tags: ["how to", "css", "frontend"]
description: "Learn how to make a translucent blurred background."
image: "../images/blog/backdrop-filter.jpg"
---
Recently I received a design with a translucent white background, overlapping a picture. The overlapping area was blurred. On searching for a solution, I came to know about glassmorphism design trend in CSS.

This introduced me to the CSS `backdrop-filter` property.

For my use, `backdrop-filter: blur(8px)` did the trick. You can find a demo on [Codepen](https://codepen.io/ashvinmotye/full/XWRwGPL).

During my research, I also came across this handy generator: [https://glassmorphism.com/](https://glassmorphism.com/)

You can read more about `backdrop-filter` on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter).