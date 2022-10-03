import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ pageContext }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const pageTitle =
    (pageContext.node && pageContext.node.frontmatter.title) || "Home"
  const completeTitle =
    (pageTitle ? `${pageTitle} | ` : "") + site.siteMetadata.title
  return (
    <>
      <title>{completeTitle}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={completeTitle} />
      <meta name="og:description" content={site.siteMetadata.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={completeTitle} />
      <meta
        name="twitter:description"
        content={site.siteMetadata.description}
      />
      <style type="text/css">{`
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
        font-family: "Lato Light", sans-serif;
        font-size: 16;
      }
    `}</style>
    </>
  )
}

Head.propTypes = {
  pageContext: PropTypes.object,
}

export default Head
