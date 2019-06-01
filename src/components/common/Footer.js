import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="site-foot">
    <div className="site-foot-nav container">
      <div className="site-foot-nav-left">
        <Link to="/">Angelos Chalaris</Link> © 2019 &mdash; Powered by <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> &amp; <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>
      </div>
    </div>
  </footer>
)

export default Footer
