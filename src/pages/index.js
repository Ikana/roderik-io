import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ChuckClose from "../components/chuckClose"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black;
  }
`

function IndexPage() {
  return (
    <>
      <SEO title="cirlces on squares" />
      <GlobalStyle />
      <Layout>
        <ChuckClose />
      </Layout>
    </>
  )
}

export default IndexPage
