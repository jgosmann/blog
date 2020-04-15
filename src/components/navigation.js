import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import FlexList from "./flexList"
import PostItem from "./postItem.js"
import { highlight } from "../colors"

import me from "./me.png"

export const infoPaneWidth = 332
export const postsPaneSoftMinWidth = 396
export const postsPaneMaxWidth = 564

const infoLinkCss = {
  margin: "0 8px",
  textTransform: "uppercase",
  fontSize: "0.6em",
  "&:hover": {
    color: highlight,
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
            sourceInstanceName
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

const Navigation = (props) => {
  useEffect(() => {
    const active = document.getElementsByClassName("activePostItem")
    if (active.length > 0) {
      active[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }, [])
  const data = useStaticQuery(postsQuery)
  return (
    <nav
      css={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "center",
        a: {
          textDecoration: "none",
          color: "#000",
        },
      }}
      {...props}
    >
      <div
        css={{
          padding: "32px 32px 0",
          boxSizing: "border-box",
          width: infoPaneWidth,
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
            <a css={infoLinkCss} href="https://jgosmann.de">
              About me
            </a>
          </li>
          <li>
            <Link css={infoLinkCss} to="/legal/privacy">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link css={infoLinkCss} to="/legal/disclosure">
              Legal notice
            </Link>
          </li>
        </FlexList>
      </div>

      <div
        css={{
          flexGrow: 1,
          flexShrink: 1,
          padding: 32,
          minWidth: postsPaneSoftMinWidth,
          width: postsPaneMaxWidth,
          boxSizing: "border-box",
        }}
      >
        <FlexList
          isOrdered={true}
          css={{
            flexDirection: "column",
          }}
        >
          {data.allMdx.nodes
            .filter((node) => node.parent.sourceInstanceName == "posts")
            .map((post, i) => (
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

Navigation.propTypes = {}

export default Navigation
