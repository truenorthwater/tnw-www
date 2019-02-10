/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectData = await graphql(
    `
    {
        allPrismicProject {
            edges {
                node {
                    id
                    data {
                        slug
                        start_date
                        completion_date
                        people_served
                        
                        description {
                            html
                            text
                        }
                    }
                }
            }
        }
    }
    `
  );

  const template = path.resolve("src/templates/project.js");

  const projects = projectData.data.allPrismicProject.edges || [];

  console.log('projects', projects);
  projects.forEach(edge => {
    const project = edge.node;
    createPage({
      path: `projects/${project.data.slug}`,
      component: template,
      context: {
        uid: project.id
      }
    });
  });
};