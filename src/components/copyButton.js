import React, { useContext } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-regular-svg-icons"

import ButtonLink from "./buttonLink"
import LanguageContext from "./languageContext"

const CopyButton = ({ getCopyText }) => {
  const lang = useContext(LanguageContext)

  const onClick = () => {
    navigator.clipboard.writeText(getCopyText())
  }
  const title = lang === "de" ? "Kopieren" : "Copy"
  return (
    <ButtonLink onClick={onClick} title={title}>
      <FontAwesomeIcon icon={faCopy} />
    </ButtonLink>
  )
}

CopyButton.propTypes = {
  getCopyText: PropTypes.func.isRequired,
}

export default CopyButton
