import React from 'react';
import { Link } from 'gatsby';

import HowItWorksItem from "./HowItWorksItem";

const howItWorksContent = {
    items: [
        {
            subtitle: "100% Donations",
            title: "100% of public donations go directly to funding our clean water projects around the world.",
            body: "We cover the cost of our overhead so that we can guarantee that every cent you donate goes towards helping others.",
            linkTo: "/"
        },
        {
            subtitle: "Expert Partners",
            title: "We partner with organizations and leverage their knowledge and expertise.",
            body: "The organizations that we’ve choose to partner with have demonstrated a community-centered approach, excellent financial reporting and a deep knowledge of water project implementation.",
            linkTo: "/"
        },
        {
            subtitle: "Sustainable Success",
            title: "It's not enough to just get the water flowing.",
            body: "We want to ensure the longterm success of each of our projects. Our partners establish and train local water committees at each well site to handle repairs, maintenance and community investment.",
            linkTo: "/"
        }
    ]
}

const HowItWorks = () => (
    <section className="t-home-how">
      <div className="row row--padlarge">
        <div className="col">
          <h2 className="heading heading--large heading--center">How it works</h2>
        </div>
        {howItWorksContent.items.map(content => (
            <HowItWorksItem
                subtitle={content.subtitle}
                title={content.title}
                body={content.body}
                linkTo={content.linkTo}
            />
        ))}
      </div>
    </section>
)

export default HowItWorks;
