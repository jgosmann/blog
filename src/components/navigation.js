import React from "react"
import PropTypes from "prop-types"

import FlexList from "./flexList"
import PostItem from "./postItem.js"

import me from "./me.png"

const infoPaneWidth = 332

const infoLinkCss = {
  margin: "0 8px",
  textTransform: "uppercase",
  fontSize: "0.6em",
  "&:hover": {
    color: "#336bc5",
  },
}

const Navigation = ({ isActive, top }) => (
  <nav
    css={{
      position: "fixed",
      background: "#fff",
      top: top,
      left: 0,
      width: "100%",
      overflow: "scroll",
      display: "flex",
      height: isActive ? `calc(100vh - ${top}px)` : 0,
      overflow: "hidden",
      alignItems: "flex-start",
      flexGrow: 0,
      flexWrap: "wrap",
      justifyContent: "center",
      transition: "height 250ms ease-out",
      a: {
        textDecoration: "none",
        color: "#000",
      },
    }}
  >
    <div
      css={{
        padding: "32px 32px 0",
        boxSizing: "border-box",
        maxWidth: infoPaneWidth,
        textAlign: "center",
      }}
    >
      <img
        alt="me"
        src={me}
        width="200"
        height="200"
        css={{ margin: "0 auto", userSelect: "none" }}
      />
      <p css={{ margin: "32px 0", fontStyle: "italic" }}>
        This page mostly serves as an archive of some of my older blog posts by
        me. I am rarely adding new posts these days.
      </p>
      <FlexList
        css={{
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <a css={infoLinkCss} href="">
            About me
          </a>
        </li>
        <li>
          <a css={infoLinkCss} href="">
            Privacy policy
          </a>
        </li>
        <li>
          <a css={infoLinkCss} href="">
            Legal notice
          </a>
        </li>
      </FlexList>
    </div>

    <div css={{ flexGrow: 1, padding: 32, boxSizing: "border-box" }}>
      <FlexList
        isOrdered={true}
        css={{
          flexDirection: "column",
        }}
      >
        <li
          css={{
            margin: "16px 0",
            "&:nth-child(1)": {
              marginTop: "0px",
            },
          }}
        >
          <PostItem />
        </li>
        <li
          css={{
            margin: "16px 0",
            "&:nth-child(1)": {
              marginTop: "0px",
            },
          }}
        >
          <PostItem />
        </li>
      </FlexList>
    </div>
  </nav>
)

Navigation.propTypes = {
  isActive: PropTypes.bool,
  top: PropTypes.number,
}

export default Navigation
