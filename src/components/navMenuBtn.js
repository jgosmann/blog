import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

export const height = 40

const NavMenuButton = ({ isOpen, onClick, maxDisplayWidth }) => {
  return (
    <button
      css={{
        border: "none",
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        boxShadow: "0 0px 4px 0px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        fontSize: 32,
        height: height,
        zIndex: 1,
        cursor: "pointer",
        outline: "none",

        "&:active": {
          boxShadow: "0 0px 1px 0px rgba(0, 0, 0, 0.3)",
        },

        [`@media (min-width: ${maxDisplayWidth}px)`]: {
          display: "none",
        },
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faCaretDown}
        css={{
          transition: "250ms",
          ...(isOpen
            ? {
                transform: "rotate(-180deg)",
              }
            : {}),
        }}
      />
    </button>
  )
}

NavMenuButton.propTypes = {
  isOpen: PropTypes.bool,
  maxDisplayWidth: PropTypes.number,
  onClick: PropTypes.func,
}

export default NavMenuButton
