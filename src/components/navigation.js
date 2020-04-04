import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import FlexList from "./flexList"
import PostItem from "./postItem.js"

import me from "./me.png"

export const infoPaneWidth = 332
export const postsPaneSoftMinWidth = 396
const postsPaneMaxWidth = 564

const infoLinkCss = {
  margin: "0 8px",
  textTransform: "uppercase",
  fontSize: "0.6em",
  "&:hover": {
    color: "#336bc5",
  },
}

const postsQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        timeToRead
        parent {
          ... on File {
            name
          }
        }
        frontmatter {
          title
          date(formatString: "MMMM D, Y")
        }
      }
    }
  }
`

const Navigation = ({
  isActive,
  top,
  staticDisplayWidth,
  sideBySideDisplayWidth,
}) => {
  const data = useStaticQuery(postsQuery)
  return (
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
        overflow: "scroll",
        alignItems: "flex-start",
        flexGrow: 0,
        flexWrap: "wrap",
        justifyContent: "center",
        transition: "height 250ms ease-out",
        a: {
          textDecoration: "none",
          color: "#000",
        },
        [`@media (min-width: ${staticDisplayWidth}px)`]: {
          position: "static",
          height: "100vh",
          width: "auto",
          flexGrow: 1,
          transition: "none",
          overflow: "scroll",
          maxWidth: infoPaneWidth + postsPaneMaxWidth,
        },
        [`@media (min-width: ${sideBySideDisplayWidth}px)`]: {
          flexWrap: "nowrap",
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
          This page mostly serves as an archive of some of my older blog posts
          by me. I am rarely adding new posts these days.
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

      <div
        css={{
          flexGrow: 1,
          padding: 32,
          boxSizing: "border-box",
          [`@media (min-width: ${sideBySideDisplayWidth}px)`]: {
            minWidth: postsPaneSoftMinWidth,
            height: "100vh",
            overflow: "scroll",
          },
        }}
      >
        <FlexList
          isOrdered={true}
          css={{
            flexDirection: "column",
          }}
        >
          {data.allMdx.nodes.map((post, i) => (
            <li
              key={i}
              css={{
                margin: i > 0 ? "16px 0" : 0,
              }}
            >
              <PostItem
                href={
                  "/posts/" +
                  post.parent.name.replace(/(\d+)-(\d+)-(\d+)-/, "$1/$2/$3/")
                }
                {...post}
                {...post.frontmatter}
              />
            </li>
          ))}
        </FlexList>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  isActive: PropTypes.bool,
  sideBySideDisplayWidth: PropTypes.number,
  staticDisplayWidth: PropTypes.number,
  top: PropTypes.number,
}

export default Navigation
