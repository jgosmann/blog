import React, { useState } from "react"
import { Global, css } from "@emotion/core"

import "normalize.css"

import SEO from "../components/seo"
import Main from "../components/main"
import Navigation from "../components/navigation"
import NavMenuButton, {
  height as menuBtnHeight,
} from "../components/navMenuBtn"

const IndexPage = () => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="app">
      <Global
        styles={css`
          @font-face {
            font-family: "Lato Light";
            src: url("fonts/LatoLatin-Light.woff2") format("woff2"),
              url("fonts/LatoLatin-Light.woff") format("woff");
            font-display: swap;
          }

          @font-face {
            font-family: "Lato Light";
            src: url("fonts/LatoLatin-LightItalic.woff2") format("woff2"),
              url("fonts/LatoLatin-LightItalic.woff") format("woff");
            font-style: italic;
            font-display: swap;
          }

          @font-face {
            font-family: "Lato Light";
            src: url("fonts/LatoLatin-Regular.woff2") format("woff2"),
              url("fonts/LatoLatin-Regular.woff") format("woff");
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
      />
      <div
        css={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Navigation isActive={menuActive} top={menuBtnHeight} />
        <Main />
      </div>
    </div>
  )
}

export default IndexPage
