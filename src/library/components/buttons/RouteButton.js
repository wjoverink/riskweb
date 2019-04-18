import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom'

class RouteButton extends React.PureComponent {
  render() {
    const { history, label, href, className, size, tabIndex } = this.props
    return (
      <Button
        type="button"
        size={size}
        className={className}
        href={href}
        variant="secondary"
        tabIndex={tabIndex}
        onClick={e => {
          e.preventDefault()
          history.push(href)
        }}
      >
        {label}
      </Button>
    )
  }
}

RouteButton.propTypes = {
  history: PropTypes.any.isRequired,
  label: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  tabIndex: PropTypes.number
}

export default withRouter(RouteButton)
