import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

const blogPost = () => {
  const post = this.props.data.markdownRemark
  const siteTitle = this.props.data.site.siteMetadata.title
  const { previous, next } = this.props.pageContext

  return (
    <div className="app">
      <Layout location={this.props.location} title={siteTitle}>
        {/* if there is a description, add, if not then load in post excerpt */}
        <Helmet
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <h1>{post.frontmatter.title}</h1>
          <small>{post.frontmatter.date}</small>
          <section
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default blogPost
