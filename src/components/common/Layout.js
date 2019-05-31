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
  const featuredImage = !isHome && pageMeta.featuredImage ? pageMeta.featuredImage : "https://avatars2.githubusercontent.com/u/8281875?v=4"
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{isHome ? title : `${pageMeta.title} — ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Angelos Chalaris (chalarangelo)" />
        <link
          rel="icon"
          type="image/png"
          href="https://www.chalarangelo.me/assets/favicon.png"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={featuredImage} />
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
