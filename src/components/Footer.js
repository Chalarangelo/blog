import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

const Footer = (props) => (
  <footer className="site-foot">
    <div className="site-foot-nav container">
      <div className="site-foot-nav-left">
        <Link to="/">{useSiteMetadata().title}</Link> © 2019
      </div>
    </div>
  </footer>
)

export default Footer
