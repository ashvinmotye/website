import React, { useEffect } from "react"

const Link = ({ location }) => {
  useEffect(() => {
    const link = document.querySelector("#redirect")
    link.href = `https://ashvinmotye.github.io${window.location.pathname}`
    link.classList.toggle("d-none")

    document.querySelector(".loading").classList.toggle("d-none")
  })

  return (
    <p>
      <span className="loading">Loading</span>
      <a
        id="redirect"
        className="d-none"
        href={`https://ashvinmotye.github.io${location.pathname}`}
      >
        {`https://ashvinmotye.github.io${location.pathname}`}
      </a>
    </p>
  )
}

export default Link
