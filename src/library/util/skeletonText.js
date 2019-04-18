import React from 'react'
import SkeletonLoader from '../components/SkeletonLoader'

export default function getText(text, textHeight = 1) {
  if (text) {
    return text
  }
  return <SkeletonLoader width="100%" count={textHeight} />
}
