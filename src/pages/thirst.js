import React from 'react';

import Layout from '../components/Layout';
import Hero from "../components/Thirst/Hero";
import ProjectCard from "../components/ProjectCard";
import ArrowButton from "../components/ArrowButton";

import IconGlass from "../components/Icon/IconGlass";
import IconHeart from "../components/Icon/IconHeart";

import drinkupimg from "../images/thirst/drinkup.jpg";
import howawayimg from "../images/thirst/howaway.jpg";
import wheremoneygoesimg from "../images/thirst/wheremoneygoes.jpg";

import monogramimg from "../images/thirst/monogram.jpg";
import collectivecoffeeimg from "../images/thirst/collectivecoffee.jpg";

import becomepartnerimg from "../images/thirst/becomepartner.jpg";


export const query = graphql`
  query {
    allPrismicThirstpartner {
      edges {
        node {
          id
            data {
            name {
              text
            }
            city {
              text
            }
            logo {
              url
            }
            website {
              url
            }
            introduction {
              text
            }
          }
        }
      }
    }
  }
`;

function sanitizePrismicThirstPartners(partnerData) {
    const { edges } = partnerData;
    const data = edges.map(edge => {
        const { node: { id, data } } = edge;

        return {
            id,
            name: data.name.text,
            city: data.city.text,
            logo: data.logo.url,
            website: data.website.url,
            introduction: data.introduction.text
        }
    });

    return data;
}

const ThirstPage = ({data}) => { 
    const partners = sanitizePrismicThirstPartners(data.allPrismicThirstpartner); 

    console.log(partners);
    return (
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
                <div className="row t-medialist">
                    <div className="col medium-6 t-medialist__item">
                        <div className="t-mediatile">
                            <div className="t-mediatile__image">
                                <IconGlass />
                            </div>
                            <p className="t-mediatile__content heading--small heading--flush">Step 1: Purchase a Thirst Initiative beverage from a local partner</p>
                        </div>
                    </div>
                    <div className="col medium-6 t-medialist__item">
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

                <div className="row">
                    <div className="col large-4">
                        <article className="t-cta-block">
                            <div className="t-cta-block__image t-cta-block__image--full"><img src={drinkupimg} /></div>
                            <div className="t-cta-block__content">
                                <h3 className="heading heading--small t-cta-block__heading">Drink Up</h3>
                                <p className="bodytext bodytext--large t-cta-block__largetext">
                                    There are two things we love for certain in this world, clean water and drinks. 
                                </p>
                                <p className="bodytext t-cta-block__text">
                                    Coffee, beer, wine, kambucha, it doesn’t matter! We're partnering with beverage companies of all shapes and sizes to reach our goals.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="col large-4">
                        <article className="t-cta-block">
                            <div className="t-cta-block__image t-cta-block__image--full"><img src={howawayimg} /></div>
                            <div className="t-cta-block__content">
                                <h3 className="heading heading--small t-cta-block__heading">Home and Away</h3>
                                <p className="bodytext bodytext--large t-cta-block__largetext">
                                    We split the funds raised equally between our international and our Canadian water projects.
                                </p>
                                <p className="bodytext t-cta-block__text">
                                    We believe that everyone, everywhere, deserves access to clean, safe drinking water. That’s why we split our work 50/50 between clean water projects in developing countires, and here in Canada.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="col large-4">
                        <article className="t-cta-block">
                            <div className="t-cta-block__image t-cta-block__image--full"><img src={wheremoneygoesimg} /></div>
                            <div className="t-cta-block__content">
                                <h3 className="heading heading--small t-cta-block__heading">Where the Money Goes</h3>
                                <p className="bodytext bodytext--large t-cta-block__largetext">
                                    100% of public donations go directly to funding our clean water projects around the world.
                                </p>
                                <p className="bodytext t-cta-block__text">
                                    We cover the cost of our overhead so that we can guarantee that every cent you donate goes towards helping others.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>

            </section>


            <section className="t-thirst-partners">
                <div className="row t-thirst-partners__inner">
                    <div className="col medium-4 t-thirst-partners__content">
                        <h2 className="heading heading--medium heading--white">Partners</h2>
                        <p className="bodytext bodytext--large bodytext--light">
                            We’ve partnered with some incredible organizations who share our 
                            dream of ending the global water crisis. Every time you order a 
                            menu item with our logo beside it you help donate 50¢ to our 
                            clean water projects around the world.
                        </p>
                    </div>

                    <div className="col medium-7 medium-offset-1 t-thirst-partners__list">
                        <ul className="t-home-projectlist">
                            {partners.map(partner => (
                                <li key={partner.id} className="t-home-projectlist__item">
                            
                                <ProjectCard
                                    thumbnail={partner.logo}
                                    title={partner.name}
                                    subtitle={partner.city}
                                    description={partner.introduction}
                                    link={partner.website}
                                    linkText="Visit Website"
                                    external={true}
                                />
                            </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </section>


            <section className="t-thirst-becomepartner">
                <div className="row row--padlarge  t-thirst-partners__inner">
                    <div className="col medium-5 t-thirst-partners__content">
                        <h2 className="heading heading--medium heading--primary">Become a Partner</h2>
                        <p className="bodytext bodytext--large">
                            Interested in joining our initiative as a company dedicated to clean water initiatives? Send us an email.
                        </p>
                        <ArrowButton external={true} url="mailto:info@truenorthwater.org" text="info@truenorthwater.org" />
                    </div>

                    <div className="col medium-6 medium-offset-1">
                        <img src={becomepartnerimg} />
                    </div>
                </div>
            </section>
        </Layout>
        )
};

export default ThirstPage
