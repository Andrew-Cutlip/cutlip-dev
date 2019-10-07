import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header className="Header">
    
    <ul style={{ listStyle: `none`, float: `right` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3>Cutlip Dev</h3>
      </Link>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      <ListLink to="/skills/">Skills</ListLink>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
