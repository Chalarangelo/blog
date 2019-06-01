import React from 'react'
import { graphql } from 'gatsby'
import Microlink from '@microlink/react'
import parse from 'html-react-parser'
import Layout from '../components/common/Layout'

export const BlogPostTemplate = ({
  content,
  description,
  tags,
  title,
  date,
  timeToRead
}) => {

  let updatedContent = parse(content).map(v => {
    if (v.type === 'p')
      if (v.props.children && !Array.isArray(v.props.children) && typeof v.props.children !== 'string')
        if (v.props.children.props.href === v.props.children.props.children) {
          let url = v.props.children.props.href
          return <><Microlink key={`micro-${url}`} url={url} /><br /></>
        }
    return v;
  })

  return (
    <div className="container">
      <article className="content">
        <section className="post-full-content">
          <h1 className="content-title">{title}</h1>
          <p className="content-meta">{date} · {timeToRead} min read</p>
          <section 
            className="content-body load-external-scripts" 
          >
            {updatedContent}
          </section>
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
