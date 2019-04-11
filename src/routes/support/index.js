import { lazy } from 'react'

const SupportPage = lazy(() => import('./components/SupportPage'))
export default {
  path: '/support',
  component: SupportPage
}
