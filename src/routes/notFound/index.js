import { lazy } from 'react'

const NotFoundPage = lazy(() => import('./components/NotFoundPage'))
export default {
  component: NotFoundPage
}
