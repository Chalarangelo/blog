import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.mdx
  
  return (
    <Layout isHome>
      <BlogRoll/>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage