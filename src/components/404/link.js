import React, { useEffect } from "react"

const Link = ({ location }) => {
  useEffect(() => {
    document.querySelector(
      "#redirect"
    ).href = `https://ashvinmotye.github.io${window.location.pathname}`
  })

  return (
    <p>
      <a
        id="redirect"
        href={`https://ashvinmotye.github.io${location.pathname}`}
      >
        {`https://ashvinmotye.github.io${location.pathname}`}
      </a>
    </p>
  )
}

export default Link
