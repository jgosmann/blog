import React from "react"
import PropTypes from "prop-types"
import { navigate, withPrefix } from "gatsby"

import "flag-icon-css/css/flag-icon.css"

import FlagDe from "./flagDe"
import FlagSplitEn from "./flagSplitEn"

const LanguageSwitcher = ({ path }) => {
  const m = path.match(/(.*)\/(..)$/)
  const lang = m && m.length > 2 ? m[2] : "en"
  const targetPath = `${path.replace(/(\/(..))?$/, lang == "en" ? "/de" : "")}`

  const onClick = (ev) => {
    ev.preventDefault()
    navigate(targetPath, { replace: true })
  }
  return (
    <a href={withPrefix(targetPath)} onClick={onClick}>
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
