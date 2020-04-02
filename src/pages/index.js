import React from "react"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Main from "../components/main"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div
      css={css`
        display: flex;
        align-items: flex-start;
      `}
    >
      <Main />
    </div>
  </>
)

export default IndexPage
