import { lazy } from 'react'

const HomePage = lazy(() => import('./components/HomePage'))
export default {
  path: '/',
  component: HomePage
}
