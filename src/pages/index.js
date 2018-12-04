import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";

import ArrowButton from "../components/ArrowButton";

const IndexPage = () => (
  <Layout>
    <Hero />
    <HowItWorks />
  </Layout>
)

export default IndexPage
