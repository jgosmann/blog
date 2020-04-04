/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const template = path.resolve("src/pages/index.js")

  const posts = await graphql(`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            title
          }
          parent {
            ... on File {
              name
            }
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
    createPage({
      path:
        "/posts/" + node.parent.name.replace(/(\d+)-(\d+)-(\d+)-/, "$1/$2/$3/"),
      component: template,
      context: { post: node },
    })
  })
}
