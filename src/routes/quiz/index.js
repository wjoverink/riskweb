import { lazy } from 'react'

const QuizPage = lazy(() => import('./components/QuizPage'))
export default {
  path: '/quiz',
  pathWithId: '/quiz/:quizId',
  component: QuizPage
}
