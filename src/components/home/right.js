import React from "react"
import { Col } from "react-bootstrap"

import { FaPaperPlane } from "react-icons/fa"

import titleStyles from "./title.module.css"

const Right = () => (
  <Col md={6} className={`${titleStyles.column} ${titleStyles.column_right}`}>
    <div className={`${titleStyles.landing_soon}`}>
      <h2>landing soon</h2>
      <span>
        <FaPaperPlane />
      </span>
    </div>
  </Col>
)

export default Right
