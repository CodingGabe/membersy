import React from "react"
import Link from "gatsby-link"
import "../styles/index.scss"
import Layout from "./Layout"
import Helmet from "react-helmet"

const Header = () => (
  <header>
    <Helmet>
      {/* Optimized by Gabe Amaya utilizing React Helmet and Gatsby */}
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta content-type="text/html" charset="utf-8" />
      <meta content="width=device-width initial-scale=1.0" name="viewport" />
      <meta
        content="Membersy is a digital health company that provides dentists with thoughtfully designed dental membership programs to make dental care more approachable."
        name="Description"
      />
      <meta content="NOODP" name="googlebot" />
      <meta property="og:url" content="https://membersy.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="membersy | a membership experience" />
      <meta property="og:image" content="" />
      <meta
        property="og:description"
        content="Membersy is a digital health company that provides dentists with thoughtfully designed dental membership programs to make dental care more approachable."
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="325" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@membersy" />
      <meta property="twitter:title" content="membersy | a membership experience" />
      <meta property="twitter:image" content="" />
      <meta property="twitter:image:alt" content="" />
      <meta
        property="twitter:description"
        content="membersy | a membership experience"
      />
    </Helmet>
    <Layout>
      <Link to="/" className="nav_link">
        home
      </Link>
      <nav>
        <Link to="/about/" className="nav_link">
          about us
        </Link>
        <Link to="/solutions/" className="nav_link">
          solutions
        </Link>
        <Link to="/approach/" className="nav_link">
          approach
        </Link>
        <Link to="/portfolio/" className="nav_link">
          portfolio
        </Link>
        <Link to="/blog/" className="nav_link">
          blog
        </Link>
        <Link to="/login" className="nav_link">
          login
        </Link>
        <Link to="/demo" className="membersy_btn">
          request demo
        </Link>
      </nav>
    </Layout>
  </header>
)

export default Header
