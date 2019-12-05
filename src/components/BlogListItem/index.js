import React from 'react'
import { Link } from 'gatsby'

import ArrowButton from '../ArrowButton'

const BlogListItem = ({ slug, title, date, except, image }) => {
  const redirect = () => {
    window.location.href = `/blog/${slug}`
  }
  return (
    <article className="c-blog-listitem" onClick={redirect}>
      <img className="c-blog-listitem__image" src={image.url} alt={image.alt} />
      <header className="c-blog-listitem__header">
        <h2 className="c-blog-listitem__title  heading--small heading--white">
          {title}
        </h2>
        <ArrowButton
          className="c-blog-listitem__cta"
          url={`/blog/${slug}`}
          text="
          View post"
        />
        <p className="c-blog-listitem__date">{date}</p>
      </header>
    </article>
  )
}

export default BlogListItem
