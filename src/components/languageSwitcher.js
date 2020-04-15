import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import "flag-icon-css/css/flag-icon.css"

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
          <span
            className="flag-icon flag-icon-de"
            css={{ marginRight: 4 }}
          ></span>
          Deutsche Version
        </>
      ) : (
        <>
          <span
            css={{
              marginRight: 4,
              position: "relative",
              lineHeight: "1em",
              height: "1em",
              verticalAlign: "text-top",
              width: "calc((4/3) * 1em)",
              display: "inline-block",
              span: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              },
            }}
          >
            <span className="flag-icon flag-icon-us"></span>
            <span
              className="flag-icon flag-icon-gb"
              css={{
                clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
              }}
            ></span>
          </span>
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
