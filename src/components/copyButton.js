import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"

import ButtonLink from "./buttonLink"

const CopyButton = ({ getCopyText }) => {
  const onClick = () => {
    navigator.clipboard.writeText(getCopyText())
  }
  const title = document.documentElement.lang === "de" ? "Kopieren" : "Copy"
  return (
    <ButtonLink onClick={onClick} title={title}>
      <FontAwesomeIcon icon={faCopy} />
    </ButtonLink>
  )
}

CopyButton.propTypes = {
  getCopyText: PropTypes.function,
}

export default CopyButton
