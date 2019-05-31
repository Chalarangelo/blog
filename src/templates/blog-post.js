import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

export const BlogPostTemplate = ({
  content,
  description,
  tags,
  title,
  date,
  helmet,
}) => {
  return (
    <div className="container">
      <article className="content">
        <section className="post-full-content">
          <h1 className="content-title">{title}</h1>
          <p>{date}</p>
          <section
            className="content-body load-external-scripts"
          >
            <MDXRenderer>{content}</MDXRenderer>
          </section>
        </section>
      </article>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { mdx: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.code.body}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
