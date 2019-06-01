import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div className="container" style={{ minHeight: '100vh' }}>
    <article className="content">
      <section className="post-full-content">
        <h1 className="content-title">{entry.getIn(['data', 'title'])}</h1>
        <p className="content-meta">{`${entry.getIn(['data', 'date'])}`}</p>
        <section 
          className="content-body load-external-scripts" 
          dangerouslySetInnerHTML={{ __html: widgetFor('body') }} />
      </section>
    </article>
  </div>
)

export default BlogPostPreview
