import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="site-head">
        <div className="container">
          <div className="site-mast">
            <div className="site-mast-left">
            </div>
            <div className="site-mast-right">
            </div>
          </div>
          {this.props.isHome ?
            <div className="site-banner">
              <h1 className="site-banner-title">{useSiteMetadata().title}</h1>
              <p className="site-banner-desc">{useSiteMetadata().description}</p>
            </div> :
            null}
          <nav className="site-nav">
            <Link to="/" className='site-nav-item'>Home</Link>
            <a href="https://www.chalarangelo.me/" target="_blank" rel="noopener noreferrer" className='site-nav-item'>Author</a>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar
