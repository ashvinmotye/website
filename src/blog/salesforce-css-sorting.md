---
slug: "/blog/automatic-css-sorting"
date: "2021-09-27"
title: "Automatic CSS sorting in VS Code"
tags: ["how to", "css", "VS Code"]
description: "Automatically sort CSS properties alphabetically in Visual Studio Code on file save."
image: "../images/blog/automatic-css-sorting-vs-code.jpg"
---
## Background
Recently I started working with Salesforce and one of my tasks was to make some styling adjustments on an Experience Cloud site. Using the CSS overrides, I started out writing my usual CSS rules. But I kept getting warnings to keep the CSS properties in alphabetical order. I tried doing it by hand but soon became exhausting to sort.

## PostCSS Sorting extension
I looked up for some extensions for VS Code and found [PostCSS Sorting by mrmlnc](https://github.com/mrmlnc/vscode-postcss-sorting).<br>
VS Code identifier: `mrmlnc.vscode-postcss-sorting`

After installing, I set up the config to sort all the properties alphabetically.
1. Press `F1`
1. Type `Open settings JSON`
1. Select `Preferences: Open Settings (JSON)` to open up your `settings.json` file
1. Add the following to the existing object and save.
```javascript
"postcssSorting.config": {
  "properties-order": "alphabetical",
}
```
Open up an existing CSS file or create a CSS file and add some rules and properties. Press `F1` and type `postcss` and select `PostCSS Sorting: Run`. And you should now have all the properties within your CSS rules sorted in alphabetical order!

## Sort on save
I was still not quite satisfied. I could set the sorting to a custom keybinding as explained in the extension documentation but that would still require another step. Automatic sorting on save would be a lifesaver! This feature is still not supported by the extension but I found a workaround in [one of its Github issues](https://github.com/mrmlnc/vscode-postcss-sorting/issues/19#issuecomment-782746159).

I used the [VS Code multi-command](https://github.com/ryuta46/vscode-multi-command) extension to bind my save action to sort all CSS files automatically.<br>
VS Code identifier: `ryuta46.multi-command`

Time to set up the key binding. 
1. Press `F1`
1. Type `Open Keyboard Shortcuts`
1. Select `Preferences: Open Keyboard Shortcuts (JSON)` to open up your `keybindings.json` fil
1. Add the following object to the existing array and save.
```javascript
{
  "key": "ctrl+s",
  "command": "extension.multiCommand.execute",
  "args": {
    "sequence": ["postcssSorting.execute", "workbench.action.files.save"]
  },
  "when": "editorLangId == css"
}
```
This basically says when I save any CSS file using `Ctrl + S`, the multi-command extension will run the PostCSS sorting and then save the file.

## But, why?
Because Salesforce recommends having all properties listed alphabetically by convention.<br>
And, because I __*hate*__ having warnings! 🙃🙃🙃

I came across this [interesting article](https://jerrylowm.medium.com/alphabetize-your-css-properties-for-crying-out-loud-780eb1852153) on why it's better to have CSS properties sorted alphabetically.

<br><br><br>
<small>*Photo used in social media banner by [Soraya Irving](https://unsplash.com/@traxing) on [Unsplash](https://unsplash.com/photos/AGtksbL8z2c).*</small>
  