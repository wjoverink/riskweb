import { lazy } from 'react'

const QuizPage = lazy(() => import('./components/QuizPage'))
export default {
  path: '/quiz',
  pathWithId: '/quiz/:type',
  pathWithTypeAndId: '/quiz/:type/:id',
  component: QuizPage
}
