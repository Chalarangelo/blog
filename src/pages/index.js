import React from 'react'

import Layout from '../components/common/Layout'
import BlogRoll from '../components/meta/BlogRoll'
import NewsletterForm from '../components/common/NewsletterForm'

const IndexPage = () => (
  <Layout isHome>
    <BlogRoll />
    <NewsletterForm />
  </Layout>
)

export default IndexPage