import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from './SiteMetadata'
import github from '../img/social/github.svg'
import twitter from '../img/social/twitter.svg'
import email from '../img/social/mail.svg'
import linkedin from '../img/social/linkedin.svg'
import codepen from '../img/social/codepen.svg'
import splash from '../img/pankaj-patel-516695-unsplash.jpeg'

const Navbar = ({ isHome }) => (
  <header className="site-head" style={{ backgroundImage: `url(${splash})` }}>
    <div className="container">
      <div className="site-mast">
        <div className="site-mast-left">
          {!isHome ? 
            <Link className='site-nav-item site-nav-title' to="/">{useSiteMetadata().title}</Link> :
          null}
        </div>
        <div className="site-mast-right">
          <a href="mailto:chalarangelo@gmail.com" className="site-nav-item" target="_blank">
            <img className="site-nav-icon" src={email} alt="E-mail" style={{width: '16px'}}/>
          </a>
          <a href="https://github.com/Chalarangelo" className="site-nav-item" target="_blank" rel="noopener noreferrer">
            <img className="site-nav-icon" src={github} alt="GitHub" style={{width: '16px'}}/>
          </a>
          <a href="https://www.linkedin.com/in/angelos-chalaris-b0933314a/" className="site-nav-item" target="_blank" rel="noopener noreferrer">
            <img className="site-nav-icon" src={linkedin} alt="LinekdIn" style={{width: '16px'}}/>
          </a>
          <a href="https://twitter.com/chalarangelo" className="site-nav-item" target="_blank" rel="noopener noreferrer">
            <img className="site-nav-icon" src={twitter} alt="Twitter" style={{width: '16px'}}/>
          </a>
          <a href="https://codepen.io/chalarangelo" className="site-nav-item" target="_blank" rel="noopener noreferrer">
            <img className="site-nav-icon" src={codepen} alt="CodePen" style={{width: '16px'}}/>
          </a>
        </div>
      </div>
      {isHome ?
        <div className="site-banner">
          <h1 className="site-banner-title">{useSiteMetadata().title}</h1>
          <p className="site-banner-desc">{useSiteMetadata().description}</p>
        </div> :
        null}
      <nav className="site-nav">
        <div className="site-nav-left">
          <Link className='site-nav-item' to="/">Home</Link>
          <a href="https://www.chalarangelo.me/" target="_blank" rel="noopener noreferrer" className='site-nav-item'>Author</a>
        </div>
      </nav>
    </div>
  </header>
)

export default Navbar
