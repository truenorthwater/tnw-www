import React from 'react'

const PostQuote = ({ quote = '', sourceName = '', sourceDescription = '' }) => {
  return (
    <blockquote className="c-postquote">
      <p className="c-postquote__text">{quote}</p>
      <footer className="c-postquote__attribution">
        {sourceName}, <strong>{sourceDescription}</strong>
      </footer>
    </blockquote>
  )
}

export default PostQuote
