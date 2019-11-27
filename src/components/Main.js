import React from "react"
import Link from "gatsby-link"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

class Main extends React.Component {
  render() {
    return (
      <main>
        <Hero />
        <Experience />
        <Approach />
        <Software />
      </main>
    )
  }
}

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="membersy_grid--wrapper">
        <div className="membersy_grid--item">
          <h1 className="membersy_heading">membership dentistry has arrived</h1>
          <p>
            Today's consumers have come to expect a highly personal and
            connected experience in everything they do. It's time denistry met
            those expectations.
          </p>
          <div className="btn_wrapper">
            <button className="membersy_btn--primary">
              <Link to="/">schedule free consultation</Link>
            </button>
            <button className="membersy_btn--secondary">
              <Link to="/">learn more</Link>
            </button>
          </div>
        </div>

        <div className="membersy_grid--item">
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </div>
      </div>
    </div>
  </section>
)

const Experience = () => (
  <section className="experience background_gray">
    <div className="container u_text--center">
      <h2 className="membersy_subheading">a membership experience</h2>
      <p>
        We're membersy, an Austin, Texas-based digital health company that
        prvieds dental practices with thoughtfully designed membership programs
        to make dental care more approachable.
      </p>
      <div className="mac_box--wrapper">
        <img src="https://via.placeholder.com/100x100" alt="placeholder" />
        <div className="u_flex--text">
        <h4>
          welcome to <span className="color_membersy">membersy</span>
        </h4>
        <p>
          Discover how our advanced membership solutions can help you launch and
          grow your own proprietary, regulatory compliant and professionally
          administered dental membership program.
        </p>
        </div>
      </div>
      <Link to="/">learn more about dental membership plans</Link>
    </div>
  </section>
)

const Approach = () => (
  <section className="approach">
    <div className="container">
      <div className="membersy_grid--wrapper">
        <div className="membersy_grid--item">
          <p className="membersy_badge">how it works</p>
          <h2 className="membersy_subheading">our approach</h2>
          <p>
            Whether you currently have a membership program in place and are
            looking to improve it, or you would like a new one built from
            scratch, our team is here to help.
          </p>
        </div>
        <div className="membersy_grid--item">
          <img src="https://via.placeholder.com/100x100" alt="placeholder" />
        </div>
      </div>
      <div className="membersy_grid--wrapper u_spacing--top">
        <div className="membersy_grid--item-3">
          <div className="membersy_card">
            <div className="number_badge">1</div>
            <h4>design</h4>
            <p>
              <em>with you from day one --</em> We’ll evaluate your current
              self-pay patient workflow (or lack thereof) and provide
              data-driven guidance on how to effectively structure, promote and
              sell your new or revamped membership program so the end result is
              an increase to your case acceptance rates, services rendered and
              patient loyalty.
            </p>
          </div>
        </div>
        <div className="membersy_grid--item-3">
          <div className="membersy_card">
            <div className="number_badge">2</div>
            <h4>develop</h4>
            <p>
              <em>when things get real --</em> We’ll evaluate your current
              self-pay patient workflow (or lack thereof) and provide
              data-driven guidance on how to effectively structure, promote and
              sell your new or revamped membership program so the end result is
              an increase to your case acceptance rates, services rendered and
              patient loyalty.
            </p>
          </div>
        </div>
        <div className="membersy_grid--item-3">
          <div className="membersy_card">
            <div className="number_badge">3</div>
            <h4>administer</h4>
            <p>
              <em>hands-on support --</em> We’ll evaluate your current self-pay
              patient workflow (or lack thereof) and provide data-driven
              guidance on how to effectively structure, promote and sell your
              new or revamped membership program so the end result is an
              increase to your case acceptance rates, services rendered and
              patient loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Software = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "dash-mockup.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="software background_gray">
      <div className="container">
        <div className="membersy_grid--wrapper">
          <div className="membersy_grid--item">
          <img src="https://gdurl.com/f_1x" alt="dashboard-mockup" className="img_fluid img_absolute" />
          {/* <Img 
              fluid={data.image.childImageSharp.fluid}
              alt="dashboard mockup"
            /> */}
          </div>
          <div className="membersy_grid--item u_align--center">
            
            <p className="membersy_badge">dental membership software</p>
            <h2 className="membersy_subheading">
              power your membership program with cutting-edge software.
            </h2>
            <p>
              Bring your community together with a simple, intuitive membership
              dashboard that automates your member workflow and scales as your
              member base grows.
            </p>
            <p>
              Our robust membership software features an online dashboard that
              displays real-time KPI's vital to the health of your membership
              programs.
            </p>
            <button className="membersy_btn u_spacing--top-small">
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main