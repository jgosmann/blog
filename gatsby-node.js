/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const readingTime = require("reading-time")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const defaultTemplate = path.resolve("src/templates/post.js")
  const legalTemplate = path.resolve("src/templates/legal.js")

  const posts = await graphql(`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            language
            title
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          tableOfContents
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (posts.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  posts.data.allMdx.nodes.forEach((node) => {
    let name = node.parent.name
    if (node.parent.sourceInstanceName == "posts") {
      name = name.replace(/(\d+)-(\d+)-(\d+)-/, "$1/$2/$3/")
    } else if (node.parent.sourceInstanceName == "legal") {
      name = name.replace(/\.(..)$/, "/$1")
    }
    const path = `/${node.parent.sourceInstanceName}/${name}/`
    const component =
      node.parent.sourceInstanceName == "legal"
        ? legalTemplate
        : defaultTemplate
    createPage({
      path,
      component: `${component}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        type: node.parent.sourceInstanceName,
        node,
        pagePath: path,
        lang: node.frontmatter.language || "en",
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}
