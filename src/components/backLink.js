import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const BackLink = () => {
  return (
    <Link to="/">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        fixedWidth
        css={{ color: "#000", marginRight: 4 }}
      />
      Go back to blog
    </Link>
  )
}

export default BackLink
