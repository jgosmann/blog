import React from "react"
import PropTypes from "prop-types"

import Main from "../components/main"
import MdxContent from "../components/mdxContent"

const PostPage = ({ pageContext }) => (
  <Main title={pageContext.node.frontmatter.title}>
    <MdxContent node={pageContext.node} />
  </Main>
)

PostPage.propTypes = {
  pageContext: PropTypes.object.required,
}

export default PostPage
