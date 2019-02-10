import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

function sanitizePrismicProject(prismicProject) {
    console.log(prismicProject);
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

    const project = sanitizePrismicProject(prismicProject);
    console.log(project);
    return (
        <Layout
            title={project.name}
            description={project.intro_text}
        >
            some project
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