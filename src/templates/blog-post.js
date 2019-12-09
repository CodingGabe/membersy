import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

class blogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <div className="app">
        <Header />
        <Layout location={this.props.location} title={siteTitle}>
          {/* if there is a description, add, if not then load in post excerpt */}
          <Helmet title={post.frontmatter.title} description={post.excerpt} />
          <article className="blog_post--wrapper">
            <div className="blog_post--title">
              <h1>{post.frontmatter.title}</h1>
              <small>{post.frontmatter.date}</small>
              <img src={post.frontmatter.thumbnail} alt="featured" />
            </div>
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
}

export default blogPost

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
        thumbnail
      }
    }
  }
`
