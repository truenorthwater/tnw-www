import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout';
import Hero from "../components/Thirst/Hero";

import IconGlass from "../components/Icon/IconGlass";
import IconHeart from "../components/Icon/IconHeart";

import drinkupimg from "../images/thirst/drinkup.jpg";
import howawayimg from "../images/thirst/howaway.jpg";
import wheremoneygoesimg from "../images/thirst/wheremoneygoes.jpg";

const ThirstPage = () => (
  <Layout
    title="Thirst Initiative - True North Water"
    description="Help give clean drinking water to people around the world, just by ordering a drink."
  >
    <Hero />


    
    <section className="t-thirst-how row--padmedium">
        <div className="row">
            <div className="t-titlebar t-thirst-how__titlebar">
                <h2 className="heading heading--medium heading--primary heading--flush">How It Works</h2>
            </div>
        </div>
        <div className="row">
            <div className="col medium-6">
                <div className="t-mediatile">
                    <div className="t-mediatile__image">
                        <IconGlass />
                    </div>
                    <p className="t-mediatile__content heading--small heading--flush">Step 1: Purchase a Thirst Initiative Beverage </p>
                </div>
            </div>
            <div className="col medium-6">
                <div className="t-mediatile">
                    <div className="t-mediatile__image">
                        <IconHeart />
                    </div>
                    <p className="t-mediatile__content heading--small heading--flush">
                        Step 2: Congratulations! You just helped give 50¢ to clean water
                    </p>
                </div>
            </div>
        </div>

        <div className="row row--padmedium">
            <div className="col large-4 t-cta-block">
                <div className="t-cta-block__image t-cta-block__image--full"><img src={drinkupimg} /></div>
                <h3 className="heading heading--small t-cta-block__heading">Drink Up</h3>
                <p className="bodytext bodytext--large t-cta-block__largetext">
                    There are two things we love for certain in this world, clean water and drinks. 
                </p>
                <p className="bodytext t-cta-block__text">
                    Coffee, beer, wine, kambucha, it doesn’t matter! We're partnering with beverage companies of all shapes and sizes to reach our goals.
                </p>
            </div>

            <div className="col large-4 t-cta-block">
                <div className="t-cta-block__image t-cta-block__image--full"><img src={howawayimg} /></div>
                <h3 className="heading heading--small t-cta-block__heading">Home and Away</h3>
                <p className="bodytext bodytext--large t-cta-block__largetext">
                    We split the funds raised equally between our international and our canadian water projects.
                </p>
                <p className="bodytext t-cta-block__text">
                    We believe that everyone, everywhere, deserves access to clean, safe drinking water. That’s why we split our work 50/50 between clean water projects in developing countires, and here in Canada.
                </p>
            </div>

            <div className="col large-4 t-cta-block">
                <div className="t-cta-block__image t-cta-block__image--full"><img src={wheremoneygoesimg} /></div>
                <h3 className="heading heading--small t-cta-block__heading">Where the Money Goes</h3>
                <p className="bodytext bodytext--large t-cta-block__largetext">
                    100% of public donations go directly to funding our clean water projects around the world.
                </p>
                <p className="bodytext t-cta-block__text">
                    We cover the cost of our overhead so that we can guarantee that every cent you donate goes towards helping others.
                </p>
            </div>
        </div>
    </section>
  </Layout>
)

export default ThirstPage
