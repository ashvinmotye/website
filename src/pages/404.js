import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/404/link"

import { GiBattleship } from "react-icons/gi"

const NotFoundPage = ({ location }) => {
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
        <Link location={location} />
      </div>
    </Layout>
  )
}

export default NotFoundPage
