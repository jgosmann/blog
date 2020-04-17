import React from "react"

import PostLayout from "../components/postLayout.js"

const NotFoundPage = () => (
  <PostLayout>
    <h1 css={{ textAlign: "center", marginTop: 128 }}>Page Not Found (404)</h1>
    <div css={{ fontSize: 128, textAlign: "center" }}>😿</div>
  </PostLayout>
)

export default NotFoundPage
