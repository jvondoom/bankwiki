import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import siteLogo from "../images/bankwiki.org.png"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        alignItems: `center`,
        display: `flex`,
        flexDirection: `column`,
        height: `100vh`,
        justifyContent: `center`,
      }}
    >
      <SEO title="Home" />
      <img src={siteLogo} alt="Bank Wiki logo" />
      <a href="http://www.bankwiki.org/wiki/">Enter the Site</a>
    </div>
  </Layout>
)

export default IndexPage
