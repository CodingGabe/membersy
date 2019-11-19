import React from "react"
import Layout from "./Layout"

const Footer = () => {
  // anytime a someone wants to add a social media icon
  // this is best practice for max seo

  // const renderFooterIcon = (title, link, icon) => (
  //     <a
  //         aria-label={title}
  //         className="footer__link"
  //         href={link}
  //         rel="noopener noreferrer"
  //         target="_blank"
  //         title={title}
  //     >
  //     {icon}
  //     </a>
  // )
  return (
    <footer>
      <Layout>
        <section>
          <h3>membersy</h3>
          <p>treating patients like members not numbers</p>
        </section>
        <section className="footer_bar--wrapper">
          <div className="footer_bar">
            <p>
              <strong>solutions</strong>
            </p>
            <p>consulting</p>
          </div>
          <div className="footer_bar">
            <p>
              <strong>company</strong>
            </p>
            <p>about</p>
          </div>
          <div className="footer_bar">
            <p>
              <strong>contact info</strong>
            </p>
            <p>mon-fri - 8am-6pm cst</p>
          </div>
        </section>
      </Layout>
    </footer>
  )
}

export default Footer
