import React, { useState } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "normalize.css"

import SEO from "../components/seo"
import Main, { mainWidth } from "../components/main"
import Navigation, {
  infoPaneWidth,
  postsPaneSoftMinWidth,
} from "../components/navigation"
import NavMenuButton, {
  height as menuBtnHeight,
} from "../components/navMenuBtn"

const twoPanesMinWidth = 300 + mainWidth
const threePanesMinWidth = infoPaneWidth + postsPaneSoftMinWidth + mainWidth

const shortcodes = { Link }

const IndexPage = ({ pageContext }) => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="app">
      <Global
        styles={css`
          html,
          body {
            height: 100%;
            overflow: ${menuActive ? "hidden" : "scroll"};
          }
        `}
      />
      <SEO title="Home" />
      <NavMenuButton
        isOpen={menuActive}
        onClick={() => setMenuActive(!menuActive)}
        maxDisplayWidth={twoPanesMinWidth}
      />
      <div
        css={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Navigation
          isActive={menuActive}
          top={menuBtnHeight}
          sideBySideDisplayWidth={threePanesMinWidth}
          staticDisplayWidth={twoPanesMinWidth}
        />
        {pageContext.post && (
          <Main
            subPaneDisplayWidth={twoPanesMinWidth}
            title={pageContext.post.frontmatter.title}
          >
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{pageContext.post.body}</MDXRenderer>
            </MDXProvider>
          </Main>
        )}
      </div>
    </div>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object,
}

export default IndexPage
