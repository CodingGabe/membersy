import React from 'react';
import styled from 'styled-components';
import Link from "gatsby-link"

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
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
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 8.4rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  & a {
    font-size: 1.6rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
      color: #F1F4F8;
    }
  }
  & a.membersy_btn {
    display: block;
    max-width: 15rem;
    text-align: center;
  }
`;