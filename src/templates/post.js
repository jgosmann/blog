import React from "react"
import PropTypes from "prop-types"

import Main from "../components/main"
import MdxContent from "../components/mdxContent"

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
