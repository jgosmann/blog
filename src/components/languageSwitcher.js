import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import "flag-icon-css/css/flag-icon.css"

import FlagDe from "./flagDe"
import FlagSplitEn from "./flagSplitEn"

const LanguageSwitcher = ({ path }) => {
  const m = path.match(/(.*)\/(..)$/)
  const lang = m && m.length > 2 ? m[2] : "en"

  const onClick = (ev) => {
    ev.preventDefault()
    navigate(`${path.replace(/(\/(..))?$/, lang == "en" ? "/de" : "")}`, {
      replace: true,
    })
  }
  return (
    <a href="#" onClick={onClick}>
      {lang == "en" ? (
        <>
          <FlagDe />
          Deutsche Version
        </>
      ) : (
        <>
          <FlagSplitEn />
          English version
        </>
      )}
    </a>
  )
}

LanguageSwitcher.propTypes = {
  path: PropTypes.string,
}

export default LanguageSwitcher
