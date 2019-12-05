import React from 'react'
import { Link } from 'gatsby'

import IconArrowRight from '../Icon/IconArrowRight'

const ArrowButton = ({
  url = '',
  onClick,
  text = '',
  className = '',
  external = false,
  dir = 'right',
}) => {
  if (!external)
    return (
      <Link to={url} className={['c-arrow-button', className].join(' ')}>
        {!!(dir === 'left') && (
          <IconArrowRight className="c-arrow-button__icon c-arrow-button__icon--right" />
        )}
        {text}
        {!!(dir === 'right') && (
          <IconArrowRight className="c-arrow-button__icon" />
        )}
      </Link>
    )

  if (external)
    return (
      <a href={url} className={['c-arrow-button', className].join(' ')}>
        {!!(dir === 'left') && (
          <IconArrowRight className="c-arrow-button__icon c-arrow-button__icon--right" />
        )}
        {text}
        {!!(dir === 'right') && (
          <IconArrowRight className="c-arrow-button__icon" />
        )}
      </a>
    )
}

export default ArrowButton
