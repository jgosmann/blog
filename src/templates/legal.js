import React from "react"
import PropTypes from "prop-types"

import BackLink from "../components/backLink"
import LanguageSwitcher from "../components/languageSwitcher"
import MdxContent from "../components/mdxContent"

const LegalPage = ({ pageContext, children }) => (
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
          <LanguageSwitcher path={pageContext.pagePath} />
        </li>
      </ul>
    </nav>
    <main>
      <MdxContent node={pageContext.node}>{children}</MdxContent>
    </main>
  </div>
)

LegalPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.children,
}

export default LegalPage
