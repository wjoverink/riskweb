import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import raf from 'raf'

class ScrollInNav extends PureComponent {
  fixedStyle = {
    position: 'absolute',
    WebkitTransition: 'all .2s ease-in-out',
    MozTransition: 'all .2s ease-in-out',
    OTransition: 'all .2s ease-in-out',
    transition: 'all .2s ease-in-out',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: 'hidden'
  }

  hiddenStyle = {
    WebkitTransform: 'translateY(-200%)',
    MsTransform: 'translateY(-200%)',
    transform: 'translateY(-200%)'
  }

  scrolledInStyle = {
    WebkitTransform: 'translateY(0)',
    MsTransform: 'translateY(0)',
    transform: 'translateY(0)'
  }

  constructor(props) {
    super(props)

    this.state = {
      hidden: true
    }

    this.handlingScrollUpdate = false
  }

  getScrollY = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else if (window.scrollTop !== undefined) {
      return window.scrollTop
    }
    return (document.documentElement || document.body.parentNode || document.body).scrollTop
  }

  handleScroll = () => {
    if (!this.handlingScrollUpdate) {
      this.handlingScrollUpdate = true
      raf(this.update)
    }
  }

  update = () => {
    let currentScrollY = this.getScrollY()
    this.setState({
      hidden: currentScrollY < this.props.scrollInHeight
    })

    this.handlingScrollUpdate = false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    let renderStyle = this.fixedStyle
    renderStyle = this.state.hidden
      ? { ...renderStyle, ...this.hiddenStyle }
      : { ...renderStyle, ...this.scrolledInStyle }

    return (
      <div className={`scroll-in-nav ${this.props.className}`} style={renderStyle}>
        {this.props.children}
      </div>
    )
  }
}

ScrollInNav.propTypes = {
  scrollInHeight: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.element.isRequired
}

ScrollInNav.defaultProps = {
  scrollInHeight: 0,
  className: undefined
}

export default ScrollInNav
