import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { keyframes } from '@emotion/react'

const mainColor = "rgb(230, 230, 230)"
const highlight = "rgb(246, 246, 246)"
const shade = "rgb(180, 180, 180)"

const shadedButton = {
  backgroundColor: mainColor,
  background: `linear-gradient(180deg, ${mainColor} 60%, ${shade} 100%)`,
  border: "none",
  borderRadius: 4,
  padding: 8,
  boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.5)",
  transition: "0.2s",
  cursor: "pointer",
  display: "inline-block",

  marginLeft: 8,
  marginRight: 8,

  ["&:hover"]: {
    backgroundColor: highlight,
    background: `linear-gradient(180deg, ${highlight} 60%, ${shade} 100%)`,
  },

  ["&:active"]: {
    transition: "0s",
    background: mainColor,
  },
}

const animation = keyframes`
  from {
    transform: scale(1, 1);
    opacity: 1;
  }
  to {
    transform: scale(3, 3);
    opacity: 0;
  }
`

const ButtonLink = ({ children, onClick, title }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  useEffect(() => {
    if (isAnimating) {
      window.setTimeout(() => setIsAnimating(false), 200)
    }
  }, [isAnimating])

  const onClickInternal = (e) => {
    setIsAnimating(true)
    onClick(e)
  }

  return (
    <button
      css={[
        shadedButton,
        {
          margin: 4,
          color: "#000",
          padding: "1px 4px",
          position: "relative",
          ["&:hover"]: { color: "#000" },
        },
      ]}
      onClick={onClickInternal}
      title={title}
    >
      {children}
      {isAnimating ? (
        <div
          css={{
            position: "absolute",
            top: 4,
            left: 4,
            animation: `${animation} 0.2s 1`,
          }}
        >
          {children}
        </div>
      ) : null}
    </button>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default ButtonLink
