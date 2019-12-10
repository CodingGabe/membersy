import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import Link from "gatsby-link"
import Logos from "../logos/logo-primary.svg"

import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  return (
    <>
      <NavBar style={barAnimation}>
          <Link to="/" className="nav_link">
            <img src={Logos} alt="Membersy Logo" width="185px" />
          </Link>
          <NavLinks style={linkAnimation}>
            <Link to="/about/" className="nav_link">
              about us
            </Link>
            <Link to="/solutions/" className="nav_link">
              solutions
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
          </NavLinks>

          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  padding: 2rem;
  box-shadow: 0 3px 24px rgba(0,0,0,.17);
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
