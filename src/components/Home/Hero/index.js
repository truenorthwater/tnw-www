import React from 'react';
import { Link } from 'gatsby';

import DonationForm from "../../DonationForm";
import ArrowButton from "../../ArrowButton";

const Hero = () => (
    <section className="t-home-hero">
      <div className="row">
        <div className="col medium-6 t-home-hero__content">
          <h1 className="t-home-hero__heading heading heading--large">
            Everyone, Everywhere, Deserves clean water.
          </h1>

          <p className="t-home-hero__body bodytext bodytext--large bodytext--light">
            884,000,000 people do not have access to safe drinking water. 
            We're going to change that together.
          </p>

          <ArrowButton url="/mission" text="Read about our mission" className="c-arrow-button--white" />
        </div>

        <div className="col medium-6 large-5">
            <DonationForm />
        </div>
      </div>

    </section>
)

export default Hero;
