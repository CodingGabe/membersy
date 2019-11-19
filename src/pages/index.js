import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

import "../styles/index.scss"

const IndexPage = () => {
//   const siteTitle = "membersy"

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default IndexPage;