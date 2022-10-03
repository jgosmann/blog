import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"

import "normalize.css"

import { mainWidth } from "../components/main"
import Navigation, {
  infoPaneWidth,
  postsPaneMaxWidth,
} from "../components/navigation"
import NavMenuButton, {
  height as menuBtnHeight,
} from "../components/navMenuBtn"

const twoPanesMinWidth = postsPaneMaxWidth + mainWidth
const threePanesMinWidth = infoPaneWidth + postsPaneMaxWidth + mainWidth
const breakpointTwoPanes = `@media (min-width: ${twoPanesMinWidth}px)`
const breakpointThreePanes = `@media (min-width: ${threePanesMinWidth}px)`

const PostLayout = ({ children, pathname, language }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [lastPath, setLastPath] = useState(pathname)
  useEffect(() => {
    if (lastPath !== pathname) {
      setLastPath(pathname)
      setMenuActive(false)
    }
  })
  useEffect(() => {
    const hideMenu = () => setMenuActive(false)
    window.addEventListener("resize", hideMenu)
    return () => window.removeEventListener("resize", hideMenu)
  }, [])

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            overflow: ${menuActive ? "hidden" : "scroll"};
          }
        `}
      />
      <div
        css={{
          marginTop: 32,
          [breakpointTwoPanes]: {
            marginLeft: postsPaneMaxWidth,
            marginTop: 0,
          },
          [breakpointThreePanes]: {
            marginLeft: infoPaneWidth + postsPaneMaxWidth,
          },
        }}
        lang={language}
      >
        {children}
      </div>
      <NavMenuButton
        isOpen={menuActive}
        onClick={() => setMenuActive(!menuActive)}
        css={{
          display: children ? "block" : "none",
          [breakpointTwoPanes]: {
            display: "none",
          },
        }}
      />
      <Navigation
        css={{
          position: "fixed",
          left: 0,
          top: menuBtnHeight,
          height:
            menuActive || !children ? `calc(100vh - ${menuBtnHeight}px)` : 0,
          width: "100%",
          overflow: "scroll",
          transition: "height 250ms ease-out",
          backgroundColor: "#fff",
          [breakpointTwoPanes]: {
            width: postsPaneMaxWidth,
            top: 0,
            height: "100%",
          },
          [breakpointThreePanes]: {
            width: infoPaneWidth + postsPaneMaxWidth,
            height: "100%",
            overflow: "hidden",
            ["&>div"]: {
              height: "100%",
              overflow: "scroll",
            },
          },
        }}
      />
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string,
}

export default PostLayout
