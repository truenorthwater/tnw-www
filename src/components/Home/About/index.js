import React from 'react';

import ArrowButton from "../../ArrowButton";
import MountainCottage from "../../Image/MountainCottage";

const About = () => (
    <section className="t-home-about">
      <div className="row row--padlarge t-home-about__inner">
        <div className="col medium-4 medium-offset-7 t-home-about__content">
            <h2 className="heading heading--medium heading--primary">About True North Water</h2>
            <p className="bodytext bodytext--large">
            True North Water is a registered Public Foundation based in Calgary, Alberta. Our goal is to help bring clean, 
            safe drinking water to those around the world who need it most. 
            One hundred percent of the money we raise goes directly to funding projects.
            </p>
            {/* <ArrowButton url="/mission" text="Learn More" className="c-arrow-button--primary" /> */}
        </div>

        <div className="col t-home-about__image">
            <MountainCottage className="t-home-about__svg" />
        </div>

      </div>
    </section>
)

export default About;
