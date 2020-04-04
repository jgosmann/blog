/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
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
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
