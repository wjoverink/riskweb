import { lazy } from 'react'

const FAQPage = lazy(() => import('./components/FAQPage'))
export default {
  path: '/faq',
  component: FAQPage
}
