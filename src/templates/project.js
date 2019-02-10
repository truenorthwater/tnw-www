import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Layout/Header";
import ImageGallery from "../components/ImageGallery";

import IconGlass from "../components/Icon/IconGlass";
import IconHeart from "../components/Icon/IconHeart";


function sanitizePrismicProject(prismicProject) {
    const {
        name,
        slug,
        solution,
        location,
        start_date,
        completion_date,
        people_served,
        implementing_partner,
        distance_to_water_source,
        description,
        intro_text,
        images
    } = prismicProject.data;

    return {
        name: name.text,
        slug,
        solution: solution.text,
        location: location.text,
        start_date,
        completion_date,
        people_served,
        implementing_partner: implementing_partner.text,
        distance_to_water_source: distance_to_water_source.text,
        description: description.html,
        intro_text: intro_text.text,
        images: images.map(image => {
            return {
                caption: image.caption.text,
                url: image.url.url
            }
        })
    }
}

const Project = ({ data: { prismicProject }}) => {

    const {
        name,
        slug,
        solution,
        location,
        start_date,
        completion_date,
        people_served,
        implementing_partner,
        distance_to_water_source,
        description,
        intro_text,
        images
    } = sanitizePrismicProject(prismicProject);

    return (
        <Layout
            title={name}
            description={intro_text}
        >
            <section className="t-project-hero">
                <Header />

                <div className="row t-project-hero__inner">
                    <h1 className="t-project-hero__inner heading heading--large heading--white heading--center">{ name }</h1>
                </div>
            </section>


            <div className="row row--padlarge t-project-main">
                <div className="t-project-main__content col large-8">
                    <ImageGallery images={images} />
                    <div className="c-project-description" dangerouslySetInnerHTML={{__html: description}} />
                </div>

                <div className="t-project-main__sidebar col large-4">

                    <div className="t-mediatile">
                        <span className="t-mediatile__image">
                            <IconGlass width="72px" height="72px" />
                        </span>

                        <span className="t-mediatile__content">
                            <span className="c-field__label">Solution</span>
                            <span className="heading heading--medium">{solution}</span>
                        </span>
                    </div>

                    <br/>
                    <br/>

                    <div className="t-mediatile">
                        <span className="t-mediatile__image">
                            <IconHeart width="72px" height="72px" />
                        </span>
            
                        <span className="t-mediatile__content">
                            <span className="c-field__label">People Served</span>
                            <span className="heading heading--medium">{people_served}</span>
                        </span>
                    </div>

                    <br/>
                    <br/>

                    <table className="c-project-details" width="100%">
                        <thead className="c-project-details__header">
                            <th className="c-project-details__heading" colSpan="2">
                                <h3 className="heading heading--small">Project Details</h3>
                            </th>
                        </thead>
                        <tbody className="c-project-details__body">
                            <tr className="c-project-details__row">
                                <td className="c-project-details__key">Start Date</td>
                                <td className="c-project-details__value">{start_date}</td>
                            </tr>
                            <tr className="c-project-details__row">
                                <td className="c-project-details__key">Completion Date</td>
                                <td className="c-project-details__value">{completion_date}</td>
                            </tr>
                            <tr className="c-project-details__row">
                                <td className="c-project-details__key">Location</td>
                                <td className="c-project-details__value">{location}</td>
                            </tr>
                            <tr className="c-project-details__row">
                                <td className="c-project-details__key">Previous Water Distance</td>
                                <td className="c-project-details__value">{distance_to_water_source}</td>
                            </tr>
                            <tr className="c-project-details__row">
                                <td className="c-project-details__key">Implementing Partner</td>
                                <td className="c-project-details__value">{implementing_partner}</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </Layout>
    )
}

export default Project;


export const projectQuery = graphql`
query ProjectById($uid: String!) {
    prismicProject(id: { eq: $uid }) {
        id
        data {
            slug
            name {
                text
            }
            intro_text {
                text
            }
            images{
                caption {
                    text
                }
                url {
                    url
                }
            }
            implementing_partner {
                text
            }
            start_date
            completion_date
            people_served
            distance_to_water_source {
                text
            }
            solution {
                text
            }
            location {
                text
            }
            description {
                html
            }
        }
    }
}
`;