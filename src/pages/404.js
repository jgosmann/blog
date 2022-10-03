import React from "react"
import PropTypes from "prop-types"

import PostLayout from "../components/postLayout.js"

export { default as Head } from "../components/head"

const NotFoundPage = ({ location }) => (
  <PostLayout pathname={location.pathname}>
    <h1 css={{ textAlign: "center", marginTop: 128 }}>Page Not Found (404)</h1>
    <div css={{ fontSize: 128, textAlign: "center" }}>😿</div>
  </PostLayout>
)

NotFoundPage.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
}

export default NotFoundPage
