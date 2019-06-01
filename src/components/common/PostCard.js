import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
  const url = `/${post.fields.slug}/`
  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {post.frontmatter.featuredimage &&
          <div className="post-card-image" style={{
            backgroundImage: `url(${post.frontmatter.featuredimage.childImageSharp.fluid.src})`,
          }}></div>}
        {post.frontmatter.featuredpost && <span>Featured</span>}
        <h2 className="post-card-title">{post.frontmatter.title}</h2>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          <div>
            {post.frontmatter.date}
          </div>
        </div>
        <div className="post-card-footer-right">
          <div>
            {post.timeToRead} min read
          </div>
        </div>
      </footer>
    </Link>
  )
}

export default PostCard