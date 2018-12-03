import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Hero from "../components/Home/Hero";

import ArrowButton from "../components/ArrowButton";

const IndexPage = () => (
  <Layout>
    <Hero />

    <section className="t-home-how">
      <div className="row">
        <div className="col">
          <h2 className="heading heading--large">How it works</h2>
        </div>

        <div className="col large-4 t-cta-block">
          <h3 className="heading heading--small t-cta-block__heading">100% Donations</h3>
          <p className="bodytext bodytext--large t-cta-block__largetext">100% of public donations go directly to funding our clean water projects around the world. </p>
          <p className="bodytext t-cta-block__text">We cover the cost of our overhead so that we can guarantee that every cent you donate goes towards helping others.</p>
          <Link to="/" className="c-arrow-button c-arrow-button--primary t-cta-block__button">Learn more</Link>
        </div>


        <div className="col large-4">
          <h3 className="heading heading--small">Expert Partners</h3>
          <p className="bodytext bodytext--large">We partner with organizations to leverage their knowledge and expertise. </p>
          <p className="bodytext">The organizations that we’ve choose to partner with have demonstrated a community-centered approach, excellent financial reporting and a deep knowledge of water project implementation.</p>
        </div>


        <div className="col large-4">
          <h3 className="heading heading--small">Sustainable Success</h3>
          <p className="bodytext bodytext--large">It's not enough to just get the water flowing.</p>
          <p className="bodytext">We want to ensure the longterm success of each of our projects. Our partners establish and train local water committees at each well site to handle repairs, maintenance and community investment.</p>
        </div>
      </div>
    </section>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
