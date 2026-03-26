import * as React from "react"

import Layout from "../components/Layout/Layout"
import SeoComponent from "../components/SeoComponent/SeoComponent"
import Hero from '../components/Hero/Hero'
import CTAArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Quote from "../components/Quote/Quote"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
      <SeoComponent title="HomeCakeit"/>
      <Hero/>      
      <CTAArea/>
      <LatestBlogPost/>
      <Quote />
      <About />
  </Layout>
)


export default IndexPage
