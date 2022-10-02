import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import "prismjs/themes/prism.css"

import CryptedEmail from "./cryptedEmail"
import CryptedPhone from "./cryptedPhone"
import Toc from "./toc"

const shortcodes = { CryptedEmail, CryptedPhone, Link }

const MdxContent = ({ node, children }) => (
  <MDXProvider
    components={{
      Toc: () => <Toc items={node.tableOfContents.items} />,
      ...shortcodes,
    }}
  >
    {children}
  </MDXProvider>
)

MdxContent.propTypes = {
  node: PropTypes.object,
  children: PropTypes.children,
}

export default MdxContent
