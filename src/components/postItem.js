import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarDay,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons"

import FlexList from "./flexList"
import FlagDe from "./flagDe"

const metaCss = {
  fontSize: "0.9em",
  marginBottom: "0.2em",
  marginRight: 16,
}

const PostItem = ({ title, date, fields: { timeToRead }, href, language }) => (
  <Link
    to={href}
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
    activeStyle={{
      backgroundColor: "#444",
      borderRadius: 8,
      color: "#fff",
    }}
    activeClassName="activePostItem"
  >
    <div
      css={{
        fontSize: "1.8em",
        marginBottom: "0.2em",
      }}
      lang={language}
    >
      {title}
    </div>
    <FlexList>
      {language == "de" && (
        <li css={metaCss} title="German post/Deutscher Beitrag">
          <FlagDe />
        </li>
      )}
      <li css={metaCss} title="Date posted">
        <FontAwesomeIcon icon={faCalendarDay} />
        &nbsp;{date}
      </li>
      <li css={metaCss} title="Estimated time to read">
        <FontAwesomeIcon icon={faHourglassHalf} />
        &nbsp;{Math.round(timeToRead.minutes)}&nbsp;minute read
      </li>
    </FlexList>
  </Link>
)

PostItem.propTypes = {
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  language: PropTypes.oneOf(["de", "en"]),
  fields: {
    timeToRead: {
      minutes: PropTypes.number.isRequired,
    },
  },
  title: PropTypes.string.isRequired,
}

export default PostItem
