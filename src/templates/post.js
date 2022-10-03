import React from "react"
import PropTypes from "prop-types"

import Main from "../components/main"
import MdxContent from "../components/mdxContent"

export { default as Head } from "../components/head"

const PostPage = ({ pageContext, children }) => (
  <Main title={pageContext.node.frontmatter.title}>
    <MdxContent node={pageContext.node}>{children}</MdxContent>
  </Main>
)

PostPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.children,
}

export default PostPage
