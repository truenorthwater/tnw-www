import React from 'react';

import WorldMap from "../../Image/WorldMap";

const Projects = () => (
    <section className="t-home-projects">
      <div className="row t-home-projects__inner">
        <div className="col medium-5 t-home-projects__content">
            <h2 className="heading heading--medium">Projects</h2>
            <p className="bodytext bodytext--large">
                We believe we can bring an end to the water crisis in our lifetime, 
                using 100% of all donations to fund water projects around the world. 
                Here’s where we’ve helped bring clean water so far.
            </p>
        </div>

        <div className="col t-home-projects__map">
            <WorldMap />
        </div>
      </div>
    </section>
)

export default Projects;
