import React from "react"
import PropTypes from "prop-types"

export const mainWidth = 664

const Main = ({ children, title }) => (
  <main
    css={{
      padding: "32px 32px 64px",
      boxSizing: "border-box",
      maxWidth: mainWidth,
    }}
  >
    <h1>{title}</h1>
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Main
