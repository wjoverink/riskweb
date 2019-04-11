import { Route, Switch } from 'react-router-dom'
import ContactPage from './contact'
import CoreLayout from '../layouts/CoreLayout'
import FAQPage from './faq'
import HomePage from './main'
import NotFoundPage from './notFound'
import ProductPage from './product'
import QuizPage from './quiz'
import React from 'react'
import SupportPage from './support'

export default function CreateRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={HomePage.path} component={HomePage.component} />
        <Route path={FAQPage.path} component={FAQPage.component} />
        <Route path={SupportPage.path} component={SupportPage.component} />
        <Route path={ContactPage.path} component={ContactPage.component} />
        <Route path={ProductPage.path} component={ProductPage.component} />
        <Route exact path={QuizPage.path} component={QuizPage.component} />
        <Route path={QuizPage.pathWithId} component={QuizPage.component} />
        <Route component={NotFoundPage.component} />
      </Switch>
    </CoreLayout>
  )
}
