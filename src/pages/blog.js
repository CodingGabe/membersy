import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Helmet from "react-helmet"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div className="app">
        <Header />
        <article className="blog_wrapper">
          <section className="blog_hero">
            <div className="blog_hero--container">
              <h1 className="membersy_heading">Welcome to the membersy blog!</h1>
              <h3>Health tips, life tools, community talk</h3>
            </div>
          </section>
          <Helmet title="Blog" />
          <section className="container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.id} className="blog_card">
                  <h3>
                    <Link to={`blog${node.fields.slug}`}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p>{node.excerpt}</p>
                </div>
              )
            })}
            <Link to="/">
              <button className="membersy_btn">Go Home</button>
            </Link>
          </section>
        </article>
        <Footer />
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
