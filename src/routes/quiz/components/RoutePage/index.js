import { lazy } from 'react'
import React from 'react'
import { Route } from 'react-router-dom'

const QuizPage = lazy(() => import('../QuizPage'))
class RoutePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Route exact path={'/quiz/:type/:id'} component={QuizPage} />
        <Route exact path={'/quiz/:type'} component={QuizPage} />
        <Route exact path={'/quiz'} component={QuizPage} />
      </React.Fragment>
    )
  }
}

export default RoutePage
