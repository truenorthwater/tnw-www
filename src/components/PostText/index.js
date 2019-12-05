import React from 'react'
import { Link } from 'gatsby'

// TODO: figure out how to make this work
// import { Elements } from 'prismic-richtext'
// import { RichText, Link as PrismicLink } from 'prismic-reactjs'

const PostText = ({ text }) => {
  return (
    <section
      className="c-posttext"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default PostText
