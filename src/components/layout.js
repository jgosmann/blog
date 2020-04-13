import React, { useState } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import "normalize.css"

import SEO from "../components/seo"
import { mainWidth } from "../components/main"
import Navigation, {
  infoPaneWidth,
  postsPaneMaxWidth,
} from "../components/navigation"
import NavMenuButton, {
  height as menuBtnHeight,
} from "../components/navMenuBtn"

const threePanesMinWidth = infoPaneWidth + postsPaneMaxWidth + mainWidth
const breakpointThreePanes = `@media (min-width: ${threePanesMinWidth}px)`

const IndexPage = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="app">
      <Global
        styles={css`
          html,
          body {
            overflow: ${menuActive ? "hidden" : "scroll"};
          }

          code:after {
            content: "";
          }
        `}
      />
      <SEO title="Home" />
      <NavMenuButton
        isOpen={menuActive}
        onClick={() => setMenuActive(!menuActive)}
        css={{
          [breakpointThreePanes]: {
            display: "none",
          },
        }}
      />
      <Navigation
        css={{
          position: "fixed",
          left: 0,
          top: menuBtnHeight,
          height: menuActive ? `calc(100vh - ${menuBtnHeight}px)` : 0,
          width: "100%",
          overflow: "scroll",
          transition: "height 250ms ease-out",
          backgroundColor: "#fff",
          [breakpointThreePanes]: {
            top: 0,
            height: "100%",
            width: infoPaneWidth + postsPaneMaxWidth,
            overflow: "hidden",
            ["&>div"]: {
              height: "100%",
              overflow: "scroll",
            },
          },
        }}
      />
      <div
        css={{
          marginTop: 32,
          [breakpointThreePanes]: {
            marginLeft: infoPaneWidth + postsPaneMaxWidth,
            marginTop: 0,
          },
        }}
      >
        {children}
      </div>
    </div>
  )
}

IndexPage.propTypes = {
  children: PropTypes.node,
}

export default IndexPage
