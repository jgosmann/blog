import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "prismjs/themes/prism.css"

import CryptedEmail from "./cryptedEmail"
import CryptedPhone from "./cryptedPhone"
import Toc from "./toc"

const shortcodes = { CryptedEmail, CryptedPhone, Link }

const MdxContent = ({ node }) => (
  <MDXProvider
    components={{
      Toc: () => <Toc items={node.tableOfContents.items} />,
      ...shortcodes,
    }}
  >
    <MDXRenderer>{node.body}</MDXRenderer>
  </MDXProvider>
)

MdxContent.propTypes = {
  node: PropTypes.object,
}

export default MdxContent
