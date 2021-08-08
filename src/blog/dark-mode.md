---
slug: "/blog/css-dark-mode"
date: "2021-08-09"
title: "Dark mode with CSS variables"
tags: ["how to", "css", "frontend"]
description: "Learn how to setup dark mode using CSS variables and a few lines of JavaScript."
image: "../images/blog/dark-mode.jpg"
---
In this article, I will show you how I use CSS variables to implement light and dark mode in my projects.

I use two classes on the `html` tag: `.light` and `.dark`. By default, I add the `.light` class to the `html` tag. If I have access to the source code, I add the class directly in the html file or I add it via JS.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("html").classList.add("light");
});
```

The magic happens in CSS. In the `.light` and `.dark` classes, I define the colors that I will use in the project.

```css
.light {
  --primary: #000;
  --secondary: #fff;
  --accent: #e91e63;
}

.dark {
  --primary: #fff;
  --secondary: #000;
  --accent: #e91e63;
}
```

For this example, I am using the following HTML code.

```html
<h1>Dark mode</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet laboriosam labore quae modi minus sapiente excepturi architecto asperiores quidem, totam a ex ullam quam molestiae tempora reprehenderit delectus iusto!</p>

<button>Light / Dark</button>
```

Then, I style the elements using only the CSS variables for my colors. Using this method, I don't have to rewrite multiple CSS declarations to set colors in light and dark themes, the same block handles both cases.

```css
button {
  background-color: var(--accent);
  color: var(--primary);
}

body {
  background-color: var(--secondary);
  color: var(--primary);
}
```

We are nearly there. Now, I will add the JS code to toggle the class on the `html` tag to change between light and dark. On the button click, the page will change from light theme to dark theme.

```javascript
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("html").classList.toggle("light");
  document.querySelector("html").classList.toggle("dark");
});
```

Using this method, I have successfully implemented dark mode toggle on my website. You can find a demo on [Codepen](https://codepen.io/ashvinmotye/full/mdmQBYG).