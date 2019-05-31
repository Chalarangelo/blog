import React from 'react'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import '../../styles/all.scss'
import useSiteMetadata from '../meta/SiteMetadata'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const TemplateWrapper = ({ 
  isHome = false, 
  pageMeta,
  children 
}) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{isHome ? title : `${pageMeta.title} — ${title}`}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.chalarangelo.me/assets/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.chalarangelo.me/assets/favicon.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.chalarangelo.me/assets/favicon.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="https://www.chalarangelo.me/assets/favicon.png"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar isHome={isHome} />
      <main className="site-main">
        {children}
      </main>
      <div className="viewport-bottom">
        <Footer />
      </div>
      
    </>
  )
}

export default TemplateWrapper
