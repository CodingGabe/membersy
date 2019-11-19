import React from "react"
import { Link } from 'gatsby'
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="membersy" />
    <h1>about us</h1>
    <p>Our purpose is to grow the membership dentistry movement. That goes beyond creating the best membership experiences in the market; it means revolutionizing the way people think about dental care.</p>
  </div>
)