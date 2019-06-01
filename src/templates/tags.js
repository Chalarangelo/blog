import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import PostCard from '../components/common/PostCard'
import splash from '../img/pankaj-patel-516695-unsplash.jpeg'
import NewsletterForm from '../components/common/NewsletterForm'


const TagRoute = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const tag = props.pageContext.tag
  const totalCount = props.data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged in “${tag}”`

  return (
    <Layout pageMeta={{ featuredImage: splash, title: tag }}>
      <div className="container">
        <h3 className="tag-title">{tagHeader}</h3>
        <section className="post-feed">
          {posts &&
            posts.map(({ node }) => (
              <PostCard key={node.id} post={node} />
            ))}
        </section>
      </div>
      <NewsletterForm />
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
