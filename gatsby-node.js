/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

const buildProjects = async (graphql, createPage) => {
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
  )

  const template = path.resolve('src/templates/project.js')

  const projects = projectData.data.allPrismicProject.edges || []

  projects.forEach(edge => {
    const project = edge.node
    createPage({
      path: `projects/${project.data.slug}`,
      component: template,
      context: {
        uid: project.id,
      },
    })
  })
}

const buildPosts = async (graphql, createPage) => {
  const postData = await graphql(
    `
      {
        allPrismicBlogPost {
          edges {
            node {
              uid
              id
              type
              data {
                post_title {
                  text
                }
              }
            }
          }
        }
      }
    `
  )

  const template = path.resolve('src/templates/post.js')

  const posts = postData.data.allPrismicBlogPost.edges || []

  posts
    .filter(edge => edge.node.uid !== 'test-post')
    .forEach(edge => {
      const post = edge.node
      createPage({
        path: `blog/${post.uid}`,
        component: template,
        context: {
          uid: post.uid,
        },
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await buildProjects(graphql, createPage)
  await buildPosts(graphql, createPage)
}
