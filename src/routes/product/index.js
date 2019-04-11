import { lazy } from 'react'

const ProductPage = lazy(() => import('./components/ProductPage'))
export default {
  path: '/products/:productId',
  component: ProductPage
}
