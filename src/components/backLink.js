import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"

const BackLink = () => {
  const onClick = (ev) => {
    ev.preventDefault()
    history.back()
  }
  return (
    <a href="#" onClick={onClick}>
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        fixedWidth
        css={{ color: "#000", marginRight: 4 }}
      />
      Go back to blog
    </a>
  )
}

export default BackLink
