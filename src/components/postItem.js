import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarDay,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons"

import FlexList from "./flexList"

const metaCss = {
  fontSize: "0.9em",
  marginBottom: "0.2em",
  marginRight: 16,
}

const PostItem = () => (
  <a
    css={{
      border: "1px solid rgba(0, 0, 0, 0)",
      borderBottom: "1px solid #ccc",
      padding: 16,
      display: "block",
      textDecoration: "none",
      color: "#000",

      "&:hover, &:active": {
        borderRadius: 8,
        boxShadow: "0 0px 2px 0px rgba(0, 0, 0, 0.3)",
      },

      "&:active": {
        boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0.3)",
        border: "1px solid #ccc",
      },
    }}
  >
    <div
      css={{
        fontSize: "1.8em",
        marginBottom: "0.2em",
      }}
    >
      Computational Neuroscience
    </div>
    <FlexList>
      <li css={metaCss}>
        <FontAwesomeIcon icon={faCalendarDay} />
        &nbsp;May 5, 2012
      </li>
      <li css={metaCss}>
        <FontAwesomeIcon icon={faHourglassHalf} />
        &nbsp;12 minute read
      </li>
    </FlexList>
  </a>
)

export default PostItem
