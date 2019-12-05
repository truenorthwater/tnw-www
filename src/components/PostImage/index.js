import React from 'react'

const PostImage = ({ url = '', alt = '', caption = '' }) => {
  return (
    <figure className="c-postimage">
      <img className="c-postimage__img" src={url} alt={alt || caption} />
      {!!caption && (
        <figcaption className="c-postimage__caption">{caption}</figcaption>
      )}
    </figure>
  )
}

export default PostImage
