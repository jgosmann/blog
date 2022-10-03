import React from "react"
import PropTypes from "prop-types"

import LegalLayout from "../components/legalLayout"

export { default as Head } from "../components/head"

const LegalPage = ({ pageContext, children }) => (
  <LegalLayout
    pagePath={pageContext.pagePath}
    node={pageContext.node}
    language={pageContext.lang}
  >
    {children}
  </LegalLayout>
)

LegalPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.children,
}

export default LegalPage
