import React from "react"
import PropTypes from "prop-types"

const flexListCss = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
}

const FlexList = ({ children, isOrdered, ...props }) => {
  if (isOrdered) {
    return (
      <ol css={flexListCss} {...props}>
        {children}
      </ol>
    )
  } else {
    return (
      <ul css={flexListCss} {...props}>
        {children}
      </ul>
    )
  }
}

FlexList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  css: PropTypes.object,
  isOrdered: PropTypes.bool,
}

export default FlexList
