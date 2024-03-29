import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import FlexList from "./flexList"
import PostItem from "./postItem.js"
import { highlight } from "../colors"

import me704webp from "./me-704w.webp"
import me704png from "./me-704w.png"
import me400webp from "./me-400w.webp"
import me400png from "./me-400w.png"
import me200webp from "./me-200w.webp"
import me200png from "./me-200w.png"

export const infoPaneWidth = 320
export const postsPaneSoftMinWidth = 512
export const postsPaneMaxWidth = 564

const infoLinkCss = {
  textTransform: "uppercase",
  fontSize: "0.8em",
  "&:hover": {
    color: highlight,
  },
}

const postsQuery = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          timeToRead {
            minutes
          }
        }
        parent {
          ... on File {
            name
            sourceInstanceName
          }
        }
        frontmatter {
          title
          date(formatString: "MMMM D, Y")
          language
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
        <picture
          css={{
            margin: "0 auto",
            userSelect: "none",
            width: 200,
            height: 200,
          }}
        >
          <source
            type="image/webp"
            srcSet={`${me200webp}, ${me400webp} 2x, ${me704webp} 3x`}
          />
          <source
            type="image/png"
            srcSet={`${me200png}, ${me400png} 2x, ${me704png} 3x`}
          />
          <img alt="me" src={me200png} />
        </picture>
        <p css={{ margin: "32px 0", fontStyle: "italic" }}>
          This page mostly serves as an archive of some of my older blog posts
          by me. I am rarely adding new posts these days.
        </p>
        <FlexList
          css={{
            flexDirection: "column",
            li: { margin: 4 },
          }}
        >
          <li>
            <a css={infoLinkCss} href="https://jgosmann.de">
              About me
            </a>
          </li>
          <li>
            <Link css={infoLinkCss} to="/rss.xml">
              RSS feed
            </Link>
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
          flexBasis: postsPaneSoftMinWidth,
          padding: 32,
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
