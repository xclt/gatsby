import * as React from "react"

import Layout from "../components/Layout/Layout"
import SeoComponent from "../components/SeoComponent/SeoComponent"
import Hero from '../components/Hero/Hero'
import CTAArea from "../components/CTAArea/CTAArea"

const IndexPage = () => (
  <Layout>
      <SeoComponent title="HomeCakeit"/>
      <Hero/>
      <CTAArea/>
  </Layout>
)


export default IndexPage
