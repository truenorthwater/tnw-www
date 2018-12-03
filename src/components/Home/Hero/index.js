import React from 'react';
import { Link } from 'gatsby';

import DonationForm from "../../DonationForm";

const Hero = () => (
    <section className="t-home-hero">
      <div className="row">
        <div className="col medium-6">
          <h1 className="t-home-hero__heading heading heading--large">
            Everyone, Everywhere, Deserves clean water.
          </h1>

          <p className="t-home-hero__body bodytext bodytext--large">
            884,000,000 people do not have access to safe drinking water. 
            We're going to change that together.
          </p>

          <Link className="button button--arrow" to="/mission">
            Read about our mission 
            {/* <ArrowRightIcon /> */}
          </Link>
        </div>

        <div className="col medium-6 large-5">
            <DonationForm />
        </div>
      </div>

    </section>
)

export default Hero;
