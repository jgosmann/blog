import React from "react"
import PropTypes from "prop-types"

import BackLink from "../components/backLink"
import LanguageSwitcher from "../components/languageSwitcher"
import MdxContent from "../components/mdxContent"

const LegalPage = ({ pageContext }) => (
  <div
    css={{
      maxWidth: 600,
      margin: "32px auto",
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
      <MdxContent node={pageContext.node} />
    </main>
  </div>
)

LegalPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default LegalPage
