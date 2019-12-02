import React from "react"
import Logos from '../logos/logo-primary.svg'

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
      <div className="container">
        <div className="u_text--center">
          <img src={Logos} alt="Logo Primary" />
          <p>treating patients like members not numbers</p>
        </div>
        <div className="footer_bar--wrapper">
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
          <small>made with heart in Austin, Texas</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
