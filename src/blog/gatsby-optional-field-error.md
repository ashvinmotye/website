---
slug: "/blog/gatsby-optional-field-error"
date: "2021-08-23"
title: "Gatsby optional field error"
tags: ["gatsby", "grapqhl", "frontend"]
description: "How I fixed GraphQL error #85923 for optional field in Gatsby."
image: "../images/blog/gatsby-optional-field-error.jpg"
---
## Github repository
You can clone the [demo repository](https://github.com/ashvinmotye/demo-gatsby) from Github using:

`git clone --branch demo/missing-fields https://github.com/ashvinmotye/demo-gatsby.git
`

## Markdown page
I will be needing to query these fields to make up the markdown pages. All the fields are required, except the `author` field.
```
markdownRemark
    html
    frontmatter
        date
        slug
        title
        author (optional)
```

## Folder structure
These are the folders and files that will be used in this article. All the markdown files in `src/markdown-pages` will be generated from the `templates/markdown-page.js`. This template is called in the `createPages` API in `gatsby-node.js`.
```
root
    gatsby-node.js
    src
      markdown-pages
        post-1.md
        post-2.md
      templates
        markdown-page.js
        
```
## Pages content
```
---
slug: "/blog/post-1"
date: "2021-08-11"
title: "Post 1"
---
Content from post-1.md
```
```
---
slug: "/blog/post-2"
date: "2021-08-11"
title: "Post 2"
---
Content from post-1.md
```

## GraphQL error
Both markdown pages do not have the `author` field value.
This will generate the error.
```
ERROR #85923  GRAPHQL

There was an error in your GraphQL query:

Cannot query field "author" on type "MarkdownRemarkFrontmatter".
```
Gatsby recommends the following:
1. You want to optionally use your field "author" and right now it is not used
anywhere. Therefore Gatsby can't infer the type and add it to the GraphQL
schema. A quick fix is to add at least one entry with that field ("dummy
content")
1. It is recommended to explicitly type your GraphQL schema if you want to use
optional fields. This way you don't have to add the mentioned "dummy content".

While the second option is the best solution, in my work scenario, it was quite tricky to build the custom schema since the optional field was deeply nested several levels down. So, I opted for the first solution. I added a dummy content in my markdown pages.

## Solution
File `dummy.md` created in `src/markdown-pages` with the following content.

```
---
slug: "/blog/dummy-page"
date: "2021-08-11"
title: "Dummy Markdown Page"
author: "Dummy author"
---
Dummy content here!
```
There is no error now! 🎉🎉🎉

But there is an unwanted page created at `/blog/dummy-page`. 🤦

Looking into my GraphQL query in the `gatsby-node.js` file, I am querying for all the `allMarkdownRemark` nodes that exist and feeding that in the `createPage` API.
```
{
  postsRemark: allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          slug
        }
      }
    }
  }
}
```
It took me a while to realise that I can filter out the dummy page in the query itself! So I just set a filter using the graphql query editor (`/___graphql`) to return only markdownRemark nodes whose frontmatter title is not equal to my dummy page title. You could use any field for the filter, as long as it is unique to that dummy node.
```
{
  postsRemark: allMarkdownRemark(filter: {frontmatter: {title: {ne: "Dummy Macrkdown Page"}}}) {
    edges {
      node {
        id
        frontmatter {
          slug
        }
      }
    }
  }
}
```
And done! No more error for optional fields and no more unwanted dummy pages rendered!

## Summary
1. If you have optional fields in your nodes and none of your content has that field filled out, you will get `ERROR #85923  GRAPHQL`
1. If you cannot customise your GraphQL schema, create a dummy content for that node, filling out all the optional fields.
1. Make sure to use something unique in one of your fields.
1. Using that unique value and field, filter out the dummy content in your GraphQL query in `gatsby-node.js`.
1. The resulting nodes are rendered using the `createPage` API.