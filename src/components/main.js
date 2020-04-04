import React from "react"
import PropTypes from "prop-types"

export const mainWidth = 664

const Main = ({ subPaneDisplayWidth, children, title }) => (
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
    >
      <h1>{title}</h1>
      {children}
    </main>
  </div>
)

Main.propTypes = {
  children: PropTypes.node,
  subPaneDisplayWidth: PropTypes.number,
  title: PropTypes.string,
}

export default Main
