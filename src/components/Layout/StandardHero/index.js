import React from 'react';

import Header from "../../Layout/Header";

const Hero = ({
    title = ""
}) => (
    <section className="t-standard-hero">
      <Header />
      <div className="t-standard-hero__inner">
        <div className="row">
            <div className="col t-standard-hero__content">
                <h1 className="t-standard-hero__heading heading heading--large">
                    {title}
                </h1>
          </div>
        </div>
      </div>
    </section>
)

export default Hero;

