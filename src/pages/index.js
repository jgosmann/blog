import React from "react"
import PropTypes from "prop-types"

import Main from "../components/main"
import MdxContent from "../components/mdxContent"

const IndexPage = ({ pageContext }) => {
  if (pageContext.node) {
    return (
      <Main title={pageContext.node.frontmatter.title}>
        <MdxContent node={pageContext.node} />
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
