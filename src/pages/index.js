import * as React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from '../components/Hero/Hero'
import CTAArea from "../components/CTAArea/CTAArea"

const IndexPage = () => (
  <Layout>
      <SEO title="Home"/>
      <Hero/>
      <CTAArea/>
  </Layout>
)


export default IndexPage
