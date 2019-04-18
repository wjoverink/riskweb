import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ContactPage from './contact'
import CoreLayout from '../layouts/CoreLayout'
import FAQPage from './faq'
import { getPages } from '../redux/actions/pages'
import HomePage from './main'
import isEmpty from 'lodash'
import NotFoundPage from './notFound'
import ProductPage from './product'
import PropTypes from 'prop-types'
import QuizPage from './quiz'
import React from 'react'
import SupportPage from './support'

class CreateRoutes extends React.PureComponent {
  componentDidMount() {
    if (isEmpty(this.props.pages)) {
      this.props.getPages()
    }
  }

  render() {
    return (
      <CoreLayout>
        <Switch>
          <Route exact path={HomePage.path} component={HomePage.component} />
          {[
            FAQPage,
            SupportPage,
            ContactPage,
            ProductPage,
            QuizPage
            /* Add More Routes Here */
          ].map((settings, index) => (
            <Route key={`Route-${index}`} {...settings} />
          ))}
          <Route component={NotFoundPage.component} />
        </Switch>
      </CoreLayout>
    )
  }
}

CreateRoutes.propTypes = {
  getPages: PropTypes.func.isRequired,
  pages: PropTypes.array
}

CreateRoutes.defaultProps = {
  pages: undefined
}

function mapStateToProps({ pages }) {
  return {
    pages
  }
}

export default connect(
  mapStateToProps,
  { getPages }
)(CreateRoutes)
