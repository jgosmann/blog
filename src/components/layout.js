import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import "normalize.css"

import SEO from "../components/seo"
import Navigation from "./navigation"
import PostLayout from "./postLayout"

const Layout = ({ children, pageContext }) => {
  return (
    <div className="app">
      <Global
        styles={css`
          code:after {
            content: "";
          }
        `}
      />
      <SEO title="Home" />
      {pageContext.post ? <PostLayout>{children}</PostLayout> : <Navigation />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
}

export default Layout
