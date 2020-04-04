import React from "react"
import PropTypes from "prop-types"

export const mainWidth = 664

const Main = ({ subPaneDisplayWidth, content, title }) => (
  <div
    css={{
      overflow: "scroll",
      flexGrow: 1,
    }}
  >
    <main
      css={{
        padding: "64px 32px",
        boxSizing: "border-box",
        maxWidth: mainWidth,
        [`@media (min-width: ${subPaneDisplayWidth}px)`]: {
          height: "100vh",
          paddingTop: 32,
        },
      }}
      dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1>` + content }}
    ></main>
  </div>
)

Main.propTypes = {
  content: PropTypes.string,
  subPaneDisplayWidth: PropTypes.number,
  title: PropTypes.string,
}

export default Main
