import React from 'react';
import { Link } from 'gatsby';

import HowItWorksItem from "./HowItWorksItem";

import PiggyBank from "../../Image/PiggyBank";
import ExpertPartner from "../../Image/ExpertPartner";
import Sustainability from "../../Image/Sustainability";

const howItWorksContent = {
    items: [
        {
            image: PiggyBank,
            subtitle: "100% Donations",
            title: "100% of public donations go directly to funding our clean water projects around the world.",
            body: "We cover the cost of our overhead so that we can guarantee that every cent you donate goes towards helping others, both in Canada and around the world.",
            linkTo: "/"
        },
        {
            image: ExpertPartner,
            subtitle: "Expert Partners",
            title: "We partner with organizations and leverage their knowledge and expertise.",
            body: "The organizations that we’ve choose to partner with have demonstrated a community-centered approach, excellent financial reporting and a deep knowledge of water project implementation.",
            linkTo: "/"
        },
        {
            image: Sustainability,
            subtitle: "Sustainable Success",
            title: "It's not enough to just get the water flowing, we're in it for the long haul.",
            body: "We want to ensure the longterm success of each of our projects. Our partners establish and train local water committees at each well site to handle repairs, maintenance and community investment.",
            linkTo: "/"
        }
    ]
}

const HowItWorks = () => (
    <section className="t-home-how">
            <div className="row">
                <div className="t-titlebar">
                    <h2 className="heading heading--medium heading--primary heading--flush">How It Works</h2>
                </div>
            </div>
        <div className="row">
            {howItWorksContent.items.map((content, i) => (
                <div className="col large-4" key={`content-${i}`}>
                    <HowItWorksItem
                        image={content.image}
                        subtitle={content.subtitle}
                        title={content.title}
                        body={content.body}
                        // linkTo={content.linkTo}
                    />
                </div>
            ))}
        </div>
    </section>
)

export default HowItWorks;
