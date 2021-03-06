const remarkSlug = require("remark-slug")

module.exports = {
  siteMetadata: {
    title: `Jan's blog`,
    description: `This page mostly serves as an archive of some of my older blog posts by me. I am rarely adding new posts these days.`,
    author: `@jgosmann`,
    siteUrl: `https://blog.jgosmann.de/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["node_modules"],
        },
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/src/legal`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jan's blog`,
        short_name: `Jan's blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            output: "/rss.xml",
            title: "Jan's blog",
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                const url =
                  site.siteMetadata.siteUrl +
                  "/posts/" +
                  node.parent.name.replace(/(\d+)-(\d+)-(\d+)-/, "$1/$2/$3/")
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  url,
                  guid: url,
                })
              })
            },
            query: `
              {
                allMdx(sort: {
                  fields: frontmatter___date, order: DESC},
                  filter: {fileAbsolutePath: {regex: "/posts\\\\/[-a-zA-Z0-9]+.mdx$/"}
                }) {
                  nodes {
                    frontmatter {
                      title
                      date
                      language
                    }
                    excerpt
                    parent {
                      ...on File {
                        name
                      }
                    }
                  }
                }
              }
            `,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
