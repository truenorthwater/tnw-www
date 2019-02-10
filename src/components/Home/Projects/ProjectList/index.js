import React from 'react';
import { StaticQuery } from "gatsby";

import ProjectCard from "../../../ProjectCard";



const query = graphql`
  
{
    allPrismicProject {
        edges {
            node {
                id
                data {
                    slug

                    preview_title {
                        text
                    }

                    intro_text {
                        text
                    }

                    solution {
                        text
                    }
                    
                    thumbnail {
                        url
                    }
                }
            }
        }
    }
}
`;

function sanitizePrismicProjects(projectData) {
    const { edges } = projectData;
    const data = edges.map(edge => {
        const { node: { id, data } } = edge;
        return {
            id,
            slug: data.slug,
            preview_title: data.preview_title.text,
            solution: data.solution.text,
            intro_text: data.intro_text.text,
            thumbnail: data.thumbnail.url
        }
    });

    return data;
}

const ProjectList = ({ data }) => {
    return (
        <StaticQuery
            query={query}
            render={({ allPrismicProject }) => {
                console.log(allPrismicProject);
                const projects = sanitizePrismicProjects(allPrismicProject);
                return (
                    <ul className="t-home-projectlist">
                        {projects.map((project, i) => (
                            <li key={"projectListItem" + i} className="t-home-projectlist__item">
                                <ProjectCard
                                    thumbnail={project.thumbnail}
                                    title={project.preview_title}
                                    subtitle={project.solution}
                                    description={project.intro_text}
                                    link={`/projects/${project.slug}`}
                                    external={false}
                                />
                            </li>
                        ))}
                    </ul>
                );
            }}
        />
    );
}

export default ProjectList;
