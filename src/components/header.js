// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Github from "../assets/github-brands.svg"
import Instagram from "../assets/instagram-brands.svg"
import Linkedin from "../assets/linkedin-in-brands.svg"
import Twitter from "../assets/twitter-brands.svg"

const Container = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 0.5rem;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`

const SyledGithub = styled(Github)`
  color: white;
  width: 1rem;
`

const SyledInstagram = styled(Instagram)`
  color: white;
  width: 1rem;
  margin-left: 0.7rem;
`

const SyledLinkedin = styled(Linkedin)`
  color: white;
  width: 1rem;
  margin-left: 0.7rem;
`

const SyledTwitter = styled(Twitter)`
  color: white;
  width: 1rem;
  margin-left: 0.7rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1 className="top">Rodrigo Quezada</h1>
      <div className="bot">
        <a href="https://github.com/ikana" target="_blank" rel="noopener">
          <SyledGithub />
        </a>
        <a href="https://www.instagram.com/roderikq/" target="_blank" rel="noopener">
          <SyledInstagram />
        </a>
        <a href="https://www.linkedin.com/in/quezadarodrigo/" target="_blank" rel="noopener">
          <SyledLinkedin />
        </a>
        <a href="https://twitter.com/rodikana" target="_blank" rel="noopener">
          <SyledTwitter />
        </a>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
