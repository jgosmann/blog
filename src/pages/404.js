import React from "react"
import PropTypes from "prop-types"

import PostLayout from "../components/postLayout.js"

const NotFoundPage = ({ location }) => (
  <PostLayout path={location.pathname}>
    <h1 css={{ textAlign: "center", marginTop: 128 }}>Page Not Found (404)</h1>
    <div css={{ fontSize: 128, textAlign: "center" }}>😿</div>
  </PostLayout>
)

PostLayout.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.required }).required,
}

export default NotFoundPage
