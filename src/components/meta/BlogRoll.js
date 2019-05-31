import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


const PostCard = ({ post }) => {
  const url = `/${post.fields.slug}/`
  console.log(post)
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


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMdx

    return (
      <div className="container">
        <section className="post-feed">
          {posts &&
            posts.map(({ node }) => (
              <PostCard key={node.id} post={node} />
          ))}
        </section>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              timeToRead
              code {
                body
              }
              fields {
                slug
              }
              frontmatter {
                title
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)