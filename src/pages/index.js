import React, { useState } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

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

const IndexPage = ({ pageContext }) => {
  console.log("post", pageContext)
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="app">
      <Global
        styles={css`
          @font-face {
            font-family: "Lato Light";
            src: url("/fonts/LatoLatin-Light.woff2") format("woff2"),
              url("/fonts/LatoLatin-Light.woff") format("woff");
            font-display: swap;
          }

          @font-face {
            font-family: "Lato Light";
            src: url("/fonts/LatoLatin-LightItalic.woff2") format("woff2"),
              url("/fonts/LatoLatin-LightItalic.woff") format("woff");
            font-style: italic;
            font-display: swap;
          }

          @font-face {
            font-family: "Lato Light";
            src: url("/fonts/LatoLatin-Regular.woff2") format("woff2"),
              url("/fonts/LatoLatin-Regular.woff") format("woff");
            font-weight: bold;
            font-display: swap;
          }

          body {
            font-family: "Lato Light";
            font-size: 16;
          }

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
        <Main
          subPaneDisplayWidth={twoPanesMinWidth}
          content={pageContext.post ? pageContext.post.html : ""}
          title={pageContext.post ? pageContext.post.frontmatter.title : ""}
        />
      </div>
    </div>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object,
}

export default IndexPage
