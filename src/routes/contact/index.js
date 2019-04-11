import { lazy } from 'react'

const ContactPage = lazy(() => import('./components/ContactPage'))
export default {
  path: '/contact',
  component: ContactPage
}
