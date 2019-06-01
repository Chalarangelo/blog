import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/common/Layout'
import NewsletterForm from '../../components/common/NewsletterForm'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  return (
    <Layout isHome>
      <div className="container">
        <h3 className="tag-title">Tags</h3>
        <section className="tag-list">
          <ul className="tag-list-content">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                    </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <NewsletterForm />
    </Layout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
