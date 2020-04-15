import React, { useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { GiBattleship } from "react-icons/gi"

const NotFoundPage = ({ location }) => {
  let path = useRef(location.pathname)

  useEffect(() => {
    path.current = location.pathname
  })

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-center">
        <div className="mb-3">
          <h1 className="mb-2">Currently migrating...</h1>
          <span className="ship">
            <GiBattleship />
          </span>
        </div>
        <p className="mb-0">Try this</p>
        <p>
          <a href={`https://ashvinmotye.github.io${path}/`}>
            {`https://ashvinmotye.github.io${path}/`}
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
