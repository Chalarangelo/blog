import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'

export const BlogPostTemplate = ({
  content,
  description,
  tags,
  title,
  date,
  timeToRead
}) => {
  return (
    <div className="container">
      <article className="content">
        <section className="post-full-content">
          <h1 className="content-title">{title}</h1>
          <p className="content-meta">{date} · {timeToRead} min read</p>
          <section 
            className="content-body load-external-scripts" 
            dangerouslySetInnerHTML={{__html: content}}
          />
        </section>
      </article>
    </div>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const meta = {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    timeToRead: post.timeToRead,
    featuredImage: post.frontmatter.featuredImage
  }

  return (
    <Layout pageMeta={meta}>
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
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
`
