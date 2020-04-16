import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import "normalize.css"

import SEO from "./seo"
import LanguageContext from "./languageContext"
import Navigation from "./navigation"
import PostLayout from "./postLayout"
import { highlight, highlightShade } from "../colors.js"

const Layout = ({ children, pageContext }) => {
  return (
    <div className="app">
      <LanguageContext.Provider value={pageContext.lang || "en"}>
        <Global
          styles={css`
            a {
              color: ${highlight};
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            a:visited {
              color: ${highlightShade};
            }

            a:active {
              text-decoration: underline;
              color: #888;
            }

            blockquote {
              border: 1px solid #888;
              border-left: 4px solid #888;
              border-radius: 4px;
              box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
              margin-left: 4px;
              padding-left: 8px;
            }

            pre {
              border-radius: 4px;
              box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
            }

            table {
              border-collapse: collapse;
            }

            td,
            th {
              padding: 4px;
              border-color: #444;
            }
          `}
        />
        <SEO title="Home" />
        {pageContext.type == "posts" ? (
          <PostLayout>{children}</PostLayout>
        ) : pageContext.type == "legal" ? (
          <>{children}</>
        ) : (
          <Navigation />
        )}
      </LanguageContext.Provider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
}

export default Layout
