import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"

class Main extends React.Component {
  render() {
    return (
      <main>
        <Layout>
          <section className="hero">
              <div className="membersy_grid--wrapper">
                <div className="membersy_grid--item">
                  <h1>membership dentistry has arrived</h1>
                  <p>
                    Today's consumers have come to expect a highly personal and
                    connected experience in everything they do. It's time denistry
                    met those expectations.
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
            <Experience />
          </Layout>
      </main>
    )
  }
}

const Experience = () => (
  <section className="experience">
    <Layout>
      <h2>a membership experience</h2>
      <p>
        We're membersy, an Austin, Texas-based digital health company that
        prvieds dental practices with thoughtfully designed membership programs
        to make dental care more approachable.
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
    </Layout>
  </section>
)

export default Main