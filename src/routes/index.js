import { css, StyleSheet } from 'aphrodite/no-important'
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Loader from '../library/components/loader/loader'

const HomePage = lazy(() => import('./main'))
const ProductPage = lazy(() => import('./product'))
const SupportPage = lazy(() => import('./support'))
const ContactPage = lazy(() => import('./contact'))
const FAQPage = lazy(() => import('./faq'))
const QuizPage = lazy(() => import('./quiz'))
const NotFoundPage = lazy(() => import('./notFound'))

export default function CreateRoutes() {
  return (
    <CoreLayout>
      <Suspense
        fallback={
          <div className={css(styles.mainWrapper, styles.wrapper)}>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products/:productId" component={ProductPage} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route path="/quiz/:quizId" component={QuizPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </CoreLayout>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  wrapper: {
    minHeight: 600,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
