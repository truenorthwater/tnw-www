import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Layout/StandardHero'

import BlogListItem from '../components/BlogListItem'

export const query = graphql`
  {
    allPrismicBlogPost(sort: { order: DESC, fields: last_publication_date }) {
      edges {
        node {
          uid
          id
          type
          data {
            featured_image {
              url
              thumb {
                url
                alt
              }
              alt
            }
            date(formatString: "MMMM DD, YYYY")
            body {
              ... on PrismicBlogPostBodyImageWithCaption {
                id
                primary {
                  caption {
                    text
                  }
                  image {
                    url
                    alt
                  }
                }
                slice_type
              }
              ... on PrismicBlogPostBodyQuote {
                id
                primary {
                  quote {
                    text
                  }
                  source_description {
                    text
                  }
                  source_name {
                    text
                  }
                }
                slice_type
              }
              ... on PrismicBlogPostBodyText {
                id
                primary {
                  text {
                    raw {
                      text
                      type
                    }
                  }
                }
                slice_type
              }
            }
            post_title {
              text
            }
          }
        }
      }
    }
  }
`

const extractTextValueFromKey = (obj, key) => {
  if (!obj[key]) return ''
  return obj[key].text
}

const extractImageThumbData = (obj, key) => {
  if (!obj[key] || !obj[key].thumb) return ''

  const { url, alt } = obj[key].thumb

  return {
    url,
    alt,
  }
}

const convertToPostData = rawPostData => {
  const { data, uid } = rawPostData.node
  return {
    slug: uid,
    title: extractTextValueFromKey(data, 'post_title'),
    date: data.date,
    thumb: extractImageThumbData(data, 'featured_image'),
  }
}

const BlogPage = ({ data }) => {
  const blogPosts = data.allPrismicBlogPost.edges.map(convertToPostData)

  return (
    <Layout
      title="Blog - True North Water"
      description="Updates from True North Water around our projects, our mission, and noteworthy events."
    >
      <Hero title="Blog" />

      <section className="">
        <div className="row row--padmedium">
          <div className="col medium-12">
            <ul className="t-blog-list">
              {blogPosts
                .filter(post => post.slug !== 'test-post')
                .map((post, i) => (
                  <li key={`bloglistitem-${i}`} className="t-blog-listitem">
                    <BlogListItem
                      slug={post.slug}
                      date={post.date}
                      title={post.title}
                      image={post.thumb}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
