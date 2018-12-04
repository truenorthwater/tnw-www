import React from 'react';

import ArrowButton from "../../ArrowButton";
import MountainCottage from "../../Image/MountainCottage";

const About = () => (
    <section className="t-home-about">
      <div className="row row--padlarge t-home-about__inner">
        <div className="col medium-4 medium-offset-8 t-home-about__content">
            <h2 className="heading heading--medium">About True North Water</h2>
            <p className="bodytext bodytext--large">
                True North Water is a public foundation dedicated to bringing safe, 
                clean water to those around the world who desperately need it most. 
            </p>
            <ArrowButton url="/mission" text="Learn More" className="c-arrow-button--primary" />
        </div>

        <div className="col t-home-about__image">
            <MountainCottage className="t-home-about__svg" />
        </div>
      </div>
    </section>
)

export default About;
