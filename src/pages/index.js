import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import "../styles/index.scss"

const IndexPage = () => {
  const siteTitle = "membersy"

  return (
    <div className="app" title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `dental`]}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default IndexPage
