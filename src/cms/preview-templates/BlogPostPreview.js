import React from 'react'
import '../../styles/all.scss'

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <article className="content">
        <section className="post-full-content">
          <h1 className="content-title">{entry.getIn(['data', 'title'])}</h1>
          <p className="content-meta">{`${entry.getIn(['data', 'date'])}`}</p>
          <section 
            className="content-body load-external-scripts" >
              {widgetFor('body')}
          </section>
        </section>
      </article>
    </div>
)}

export default BlogPostPreview
