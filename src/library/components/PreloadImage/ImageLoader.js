import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'
import React from 'react'
import SkeletonLoader from '../SkeletonLoader'

export default function ImageLoader({ img, style, size, className, ...other }) {
  return img ? (
    <PreloadImage {...other} className={className} style={{ ...style, ...size }} src={img} />
  ) : (
    <div style={{ ...size }} className={className}>
      <SkeletonLoader count={1} width={size.width + 'px'} height={size.height + 'px'} />
    </div>
  )
}

ImageLoader.propTypes = {
  img: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired
}

ImageLoader.defaultProps = {
  img: undefined
}
