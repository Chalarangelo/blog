import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

const Navbar = ({ isHome }) => (
  <header className="site-head">
    <div className="container">
      <div className="site-mast">
        <div className="site-mast-left">
        </div>
        <div className="site-mast-right">
        </div>
      </div>
      {isHome ?
        <div className="site-banner">
          <h1 className="site-banner-title">{useSiteMetadata().title}</h1>
          <p className="site-banner-desc">{useSiteMetadata().description}</p>
        </div> :
        null}
      <nav className="site-nav">
        <Link className='site-nav-item' to="/">Home</Link>
        <a href="https://www.chalarangelo.me/" target="_blank" rel="noopener noreferrer" className='site-nav-item'>Author</a>
      </nav>
    </div>
  </header>
)

export default Navbar
