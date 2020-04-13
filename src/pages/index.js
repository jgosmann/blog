import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "normalize.css"

import Main from "../components/main"
import Toc from "../components/toc"

const shortcodes = { Link }

const IndexPage = ({ pageContext }) => {
  if (pageContext.post) {
    return (
      <Main title={pageContext.post.frontmatter.title}>
        <MDXProvider
          components={{
            Toc: () => <Toc items={pageContext.post.tableOfContents.items} />,
            ...shortcodes,
          }}
        >
          <MDXRenderer>{pageContext.post.body}</MDXRenderer>
        </MDXProvider>
      </Main>
    )
  } else {
    return null
  }
}

IndexPage.propTypes = {
  pageContext: PropTypes.object,
}

export default IndexPage
