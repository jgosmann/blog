import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"

import "normalize.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

import SEO from "./seo"
import LanguageContext from "./languageContext"
import PostLayout from "./postLayout"
import { highlight, highlightShade } from "../colors"

const Layout = ({ children, pageContext, location }) => {
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

            pre[class*="language-"] {
              padding: 0.675em;
            }

            pre[class*="language-"],
            code {
              font-size: 0.875em;
              line-height: 1.3em;
              background: #f5f2f0;
            }
            code {
              padding: 0 2px;
            }
            pre[class*="language-"] code {
              padding: 0;
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
        <SEO
          title={
            (pageContext.node && pageContext.node.frontmatter.title) || "Home"
          }
          lang={pageContext.lang}
        />
        {pageContext.type == "posts" ? (
          <PostLayout pathname={location.pathname}>{children}</PostLayout>
        ) : (
          <>{children}</>
        )}
      </LanguageContext.Provider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
}

export default Layout
