import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import Layout from '../components/Layout'
import Header from '../components/Layout/Header'

import PostQuote from '../components/PostQuote'
import PostImage from '../components/PostImage'
import PostText from '../components/PostText'
import ArrowButton from '../components/ArrowButton'

import IconFacebook from '../components/Icon/IconFacebook'
import IconTwitter from '../components/Icon/IconTwitter'

const extractImageFromKey = (obj, key) => {
  if (!obj[key]) return null
  const { url, alt } = obj[key]

  return { url, alt }
}

const extractTextValueFromKey = (obj, key) => {
  if (!obj[key]) return ''
  return obj[key].text
}

const convertToPostData = rawPostData => {
  const { data, uid } = rawPostData
  return {
    slug: uid,
    title: extractTextValueFromKey(data, 'post_title'),
    date: data.date,
    image: extractImageFromKey(data, 'featured_image'),
    body: data.body || [],
  }
}

const renderBodySection = section => {
  const { slice_type, primary } = section
  switch (slice_type) {
    case 'quote':
      return (
        <PostQuote
          quote={extractTextValueFromKey(primary, 'quote')}
          sourceName={extractTextValueFromKey(primary, 'source_name')}
          sourceDescription={extractTextValueFromKey(
            primary,
            'source_description'
          )}
        />
      )

    case 'image_with_caption': {
      const { url, alt } = extractImageFromKey(primary, 'image')
      return (
        <PostImage
          url={url}
          alt={alt}
          caption={extractTextValueFromKey(primary, 'caption')}
        />
      )
    }

    case 'text': {
      // TODO: not sure why I need this
      const fixedText = primary.text.raw.map(text => ({
        ...text,
        spans: text.spans || [],
      }))
      return <PostText text={primary.text.html} />
    }
    default:
      return null
  }
}

const Post = ({ data: { prismicBlogPost } }) => {
  console.log(prismicBlogPost)
  const { slug, title, date, image, body } = convertToPostData(prismicBlogPost)

  const url = `https://truenorthwater.org/blog/${slug}`
  return (
    <Layout title={title} description={title}>
      <section className="t-project-hero">
        <Header />

        <div className="row t-project-hero__inner">
          <h1 className="t-project-hero__inner heading heading--large heading--white heading--center">
            {title}
          </h1>
        </div>
      </section>

      <div className="row row--padlarge t-project-main">
        <div className="col medium-8 medium-offset-2">
          <p className="bodytext bodytext--large">
            <ArrowButton text="Back to blog" url="/blog" dir="left" />
          </p>
          {!!image && <PostImage url={image.url} alt={image.alt} />}

          {body.map(renderBodySection)}
          <footer>
            <a
              className="c-social-link"
              href={`https://twitter.com/intent/tweet/?text=${title}&url=${url}`}
            >
              <IconTwitter width="16px" height="16px" />
              Share on Twitter
            </a>{' '}
            <a
              href={`http://www.facebook.com/sharer.php?u=${url}`}
              className="c-social-link"
            >
              <IconFacebook width="16px" height="16px" />
              Share on Facebook
            </a>{' '}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
              className="c-social-link"
            >
              Share on LinkedIn
            </a>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query PostById($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
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
                html
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
`
