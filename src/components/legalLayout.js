import React from "react"
import PropTypes from "prop-types"

import BackLink from "./backLink"
import LanguageSwitcher from "./languageSwitcher"
import MdxContent from "./mdxContent"

const LegalLayout = ({ pagePath, node, children, language }) => (
  <div
    css={{
      margin: "0 auto",
      padding: "32px 32px 64px",
      boxSizing: "border-box",
      maxWidth: 600,
    }}
  >
    <nav>
      <ul css={{ listStyleType: "none", padding: 0 }}>
        <li css={{ marginBottom: 4 }}>
          <BackLink />
        </li>
        <li>
          <LanguageSwitcher path={pagePath} />
        </li>
      </ul>
    </nav>
    <main lang={language}>
      <MdxContent node={node}>{children}</MdxContent>
    </main>
  </div>
)

LegalLayout.propTypes = {
  pagePath: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  children: PropTypes.children,
  language: PropTypes.string,
}

export default LegalLayout
