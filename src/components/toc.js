import React from "react"
import PropTypes from "prop-types"

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

const itemShape = {
  title: PropTypes.string,
  url: PropTypes.string,
}
const itemType = PropTypes.shape(itemShape)
itemShape.items = PropTypes.arrayOf(itemType)

Toc.propTypes = {
  items: PropTypes.arrayOf(itemType),
}

export default Toc
