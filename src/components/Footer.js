import React from "react"
import Logos from '../logos/logo-primary.svg'
import Link from "gatsby-link"

const Footer = () => {

  // anytime a someone wants to add a social media icon
  // this is best practice for max seo

  const renderFooterIcon = (title, link, icon) => (
      <a
          aria-label={title}
          className="footer__icon"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
      >
      {icon}
      </a>
  )

  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitted!')
  }

  return (
    <footer>
      <div className="container">
        <div className="u_text--center">
          <img src={Logos} alt="Logo Primary" />
          <p style={{ marginBottom: 10 }}>treating patients like members not numbers</p>
          {renderFooterIcon(
            'LinkedIn',
            'https://www.linkedin.com/company/membersy/',
            <span class="iconify" data-icon="uil:linkedin-alt" data-inline="false"></span>
          )}
          {renderFooterIcon(
            'Twitter',
            'https://twitter.com/membersydental',
            <span class="iconify" data-icon="uil:twitter-alt" data-inline="false"></span>
          )}
          {renderFooterIcon(
            'Instagram',
            'https://www.instagram.com/membersy.dental/',
            <span class="iconify" data-icon="mdi:instagram" data-inline="false"></span>
          )}
          {renderFooterIcon(
            'Facebook',
            'https://www.facebook.com/membersy/',
            <span class="iconify" data-icon="feather:facebook" data-inline="false"></span>
          )}
        </div>
        <div className="footer_bar--wrapper">
          <div className="footer_bar">
            <p>
              <strong>solutions</strong>
            </p>
            <Link to="/consulting">consulting</Link>
            <Link to="/software">software</Link>
            <Link to="/ecommerce">ecommerce</Link>
            <Link to="/marketing">marketing</Link>
            <Link to="/fulfillment">fulfillment</Link>
            <Link to="/billing">billing</Link>
            <Link to="/support">support</Link>
            <Link to="/compliance">compliance</Link>
          </div>
          <div className="footer_bar">
            <p>
              <strong>company</strong>
            </p>
            <Link to="/about">about</Link>
            <Link to="/careers">careers</Link>
            <Link to="/contact us">contact us</Link>
          </div>
          <div className="footer_bar">
            <p>
              <strong>contact info</strong>
            </p>
            <p style={{ marginBottom: 2 }}>mon-fri - 8am-6pm cst</p>
            <p style={{ marginBottom: 2 }}>512.842.9296</p>
            <Link to="mailto:hello@membersy.com">hello@membersy.com</Link>
          </div>
          <div className="footer_bar">
            <p><strong>stay in touch!</strong></p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="email" placeholder="email address" />
              <button type="submit" className="email_btn"><span class="iconify" data-icon="bx:bx-right-arrow-alt" data-inline="false"></span></button>
            </form>
          </div>
        </div>
        <hr />
        <small style={{ marginTop: 20, marginBottom: 20 }}>
          Dental membership plans administered by membersy are NOT INSURANCE,
          but rather a licensed dental savings plan offered through your local
          dental office. Members in good standing with their annual membership
          fee are eligible to receive transparent, member-only discounts from
          the normal retail fees that participating offices typically charge
          self-pay patients for dental services rendered. Plan details and
          member savings are exclusive to participating offices and may vary by
          location. Membersy does not make payments directly to dental providers
          for services rendered to plan members. Members are obligated to pay
          for all dental services, but will receive a discount on services
          rendered by participating dental providers. Membership plans are not
          qualified health plans under the Affordable Health Act. Membership
          plans do not meet the minimum creditable coverage requirements under
          MGLC.111M and 956 CMR 5.00. Membersy LLC is a discount medical plan
          operator (“DMPO”) with offices at 811 Barton Springs Rd. Ste. 750,
          Austin, TX 78704.
        </small>
        <div className="u_space-between">
          <small>2019 | membersy llc | all rights reserved</small>
          <small>made with <span role="img" aria-label="heart icon" class="iconify" data-icon="emojione:heart-suit" data-inline="false"></span> in Austin, Texas</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
