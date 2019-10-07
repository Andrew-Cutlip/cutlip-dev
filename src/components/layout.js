/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"



const Layout = ({ children }) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
