import { ReactComponent as Logo } from '../../../images/skout-powered-b.svg'
import React from 'react'

export default function SkoutLogo({ ...other }) {
  return <Logo {...other} role="img" focusable="false" aria-label={'Powered by Skout'} />
}
