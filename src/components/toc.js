import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Toc = ({ items }) => (
  <ol>
    {items.map((item) => (
      <li key={item.url}>
        <a href={item.url}>{item.title}</a>
        {item.items && <Toc items={item.items} />}
      </li>
    ))}
  </ol>
)

const tocType = (props, propName, componentName) =>
  PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      items: tocType,
    })
  )(props, propName, componentName)

Toc.propTypes = {
  items: tocType,
}

export default Toc
