import React, { Component } from "react"
import "../styles/index.scss"
import Navbar from "./Navbar"
import Helmet from "react-helmet"

class Header extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <>
      <header>
        <Helmet>
          {/* Optimized by Gabe Amaya utilizing React Helmet and Gatsby */}
          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
          <meta content-type="text/html" charset="utf-8" />
          <meta
            content="width=device-width initial-scale=1.0"
            name="viewport"
          />
          <meta
            content="Membersy is a digital health company that provides dentists with thoughtfully designed dental membership programs to make dental care more approachable."
            name="Description"
          />
          <meta content="NOODP" name="googlebot" />
          <meta property="og:url" content="https://membersy.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="membersy | a membership experience"
          />
          <meta property="og:image" content="" />
          <meta
            property="og:description"
            content="Membersy is a digital health company that provides dentists with thoughtfully designed dental membership programs to make dental care more approachable."
          />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="325" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content="@membersy" />
          <meta
            property="twitter:title"
            content="membersy | a membership experience"
          />
          <meta property="twitter:image" content="" />
          <meta property="twitter:image:alt" content="" />
          <meta
            property="twitter:description"
            content="membersy | a membership experience"
          />
          <script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
        </Helmet>
        <Navbar
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
      </header>
        
      </>
    )
  }
}

// const Header = () => (
//   <header>
    
//     <Layout>
    
//     </Layout>
//   </header>
// )

export default Header
