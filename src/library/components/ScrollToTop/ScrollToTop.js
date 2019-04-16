import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired
}

export default withRouter(ScrollToTop)
