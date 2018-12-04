import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout';
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";

const IndexPage = () => (
  <Layout
    title="True North Water - Canada's Clean Water Charity"
    description="884,000,000 people do not have access to safe drinking water. We're going to change that together."
  >
    <Hero />
    <HowItWorks />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
