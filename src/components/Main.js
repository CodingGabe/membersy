import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"

class Main extends React.Component {
  render() {
    return (
      <main>
        <Layout>
          <Hero />
          <Experience />
          <Approach />
          <Software />
        </Layout>
      </main>
    )
  }
}

const Hero = () => (
  <section className="hero">
    <div className="membersy_grid--wrapper">
      <div className="membersy_grid--item">
        <h1>membership dentistry has arrived</h1>
        <p>
          Today's consumers have come to expect a highly personal and connected
          experience in everything they do. It's time denistry met those
          expectations.
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
  </section>
)

const Experience = () => (
  <section className="experience background_gray">
    <h2>a membership experience</h2>
    <p>
      We're membersy, an Austin, Texas-based digital health company that prvieds
      dental practices with thoughtfully designed membership programs to make
      dental care more approachable.
    </p>
    <div className="mac_box--wrapper">
      <img src="https://via.placeholder.com/100x100" alt="placeholder" />
      <h4>
        welcome to <span className="color_membersy">membersy</span>
      </h4>
      <p>
        Discover how our advanced membership solutions can help you launch and
        grow your own proprietary, regulatory compliant and professionally
        administered dental membership program.
      </p>
    </div>
    <Link to="/">learn more about dental membership plans</Link>
  </section>
)

const Approach = () => (
  <section className="approach">
    <div className="membersy_grid--wrapper">
      <div className="membersy_grid--item">
        <p className="membersy_badge">how it works</p>
        <h2>our approach</h2>
        <p>
          Whether you currently have a membership program in place and are
          looking to improve it, or you would like a new one built from scratch,
          our team is here to help.
        </p>
      </div>
      <div className="membersy_grid--item">
        <img src="https://via.placeholder.com/100x100" alt="placeholder" />
      </div>
    </div>
    <div className="membersy_grid--wrapper">
      <div className="membersy_grid--item">
        <div className="membersy_card">
          <p className="number_badge">1</p>
          <h4>design</h4>
          <p>
            <em>with you from day one --</em> We’ll evaluate your current
            self-pay patient workflow (or lack thereof) and provide data-driven
            guidance on how to effectively structure, promote and sell your new
            or revamped membership program so the end result is an increase to
            your case acceptance rates, services rendered and patient loyalty.
          </p>
        </div>
      </div>
      <div className="membersy_grid--item">
        <div className="membersy_card">
          <p className="number_badge">2</p>
          <h4>develop</h4>
          <p>
            <em>when things get real --</em> We’ll evaluate your current
            self-pay patient workflow (or lack thereof) and provide data-driven
            guidance on how to effectively structure, promote and sell your new
            or revamped membership program so the end result is an increase to
            your case acceptance rates, services rendered and patient loyalty.
          </p>
        </div>
      </div>
      <div className="membersy_grid--item">
        <div className="membersy_card">
          <p className="number_badge">3</p>
          <h4>administer</h4>
          <p>
            <em>hands-on support --</em> We’ll evaluate your current self-pay
            patient workflow (or lack thereof) and provide data-driven guidance
            on how to effectively structure, promote and sell your new or
            revamped membership program so the end result is an increase to your
            case acceptance rates, services rendered and patient loyalty.
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Software = () => (
  <section className="software background_gray">
    <div className="membersy_grid--wrapper">
      <div className="membersy_grid--item">
      <p className="membersy_badge">dental membership software</p>
    <h2>power your membership program with cutting-edge software.</h2>
    <p>Bring your community together with a simple, intuitive membership dashboard that automates your member workflow and scales as your member base grows.</p>
    <p>Our robust membership software features an online dashboard that displays real-time KPI's vital to the health of your membership programs.</p>
    <button className="membersy_btn">learn more</button>
      </div>
      <div className="membersy_grid--item">
      <img src="https://via.placeholder.com/250x200" alt="placeholder" />
      </div>
    </div>
  </section>
)

export default Main