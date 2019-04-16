import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import footerInfo from '../../settings/footerInfo'
import { getSocials } from '../../redux/actions/socials'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import PropTypes from 'prop-types'
import { SocialIcon } from 'react-social-icons'
import { withRouter } from 'react-router-dom'

class Footer extends PureComponent {
  componentDidMount() {
    if (this.props.socials.length === 0) {
      this.props.getSocials()
    }
  }

  render() {
    const { socials, history } = this.props
    return (
      <footer className={css(styles.footerInfo)}>
        <div className={css(styles.wrapper)}>
          <Navbar expand="lg">
            <Navbar.Brand
              className="logoText"
              href="/"
              onClick={e => {
                e.preventDefault()
                history.push('/')
              }}
            >
              RSURANCE
            </Navbar.Brand>
            <Nav className="flex-column mr-auto">
              <Nav.Item className={css(styles.header)}>{footerInfo.menuHeader}</Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href={'/faq'}
                  onClick={e => {
                    e.preventDefault()
                    history.push('/faq')
                  }}
                >
                  FAQs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href={'/support'}
                  onClick={e => {
                    e.preventDefault()
                    history.push('/support')
                  }}
                >
                  Support
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href={'/contact'}
                  onClick={e => {
                    e.preventDefault()
                    history.push('/contact')
                  }}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {socials.length > 0 && (
              <Nav className="flex-column social">
                <Nav.Item className={css(styles.header)}>{footerInfo.socialHeader}</Nav.Item>
                <Nav>
                  {socials.map(social => (
                    <Nav.Item key={social.url}>
                      <SocialIcon className={css(styles.marginRight)} url={social.url} />
                    </Nav.Item>
                  ))}
                </Nav>
              </Nav>
            )}
          </Navbar>
          <hr />
          <p className={css(styles.bottomtext)}>{footerInfo.copy}</p>
        </div>
      </footer>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 347,
    backgroundColor: '#f6f6f6',
    textAlign: 'center',
    padding: '0 30px'
  },
  bottomtext: {
    fontSize: 13,
    color: '#6a6a6a'
  },
  marginRight: {
    marginRight: 5
  },
  header: {
    marginBottom: 10,
    fontSize: 16,
    color: '#000'
  },
  wrapper: {
    maxWidth: 1050,
    padding: '40px 0px 0px',
    position: 'relative',
    margin: '0 auto',
    textAlign: 'center',
    ':nth-child(1n)>nav': {
      alignItems: 'flex-start',
      textAlign: 'left',
      marginBottom: 120
    },
    ':nth-child(1n) .navbar>.navbar-nav': {
      marginTop: 6,
      marginLeft: '2em'
    },
    ':nth-child(1n) .navbar>.social': {
      marginLeft: 0
    },
    ':nth-child(1n) .social .navbar-nav': {
      flexWrap: 'nowrap!important',
      flexDirection: 'row!important'
    },
    ':nth-child(1n)>nav .nav-link': {
      padding: 0
    }
  },
  menu: {}
})

Footer.propTypes = {
  history: PropTypes.any.isRequired,
  socials: PropTypes.array,
  getSocials: PropTypes.func.isRequired
}

Footer.defaultProps = {
  socials: []
}

function mapStateToProps({ socials }) {
  return {
    socials: Object.values(socials).map(item => ({
      url: item
    }))
  }
}

export default withRouter(
  compose(
    connect(
      mapStateToProps,
      {
        getSocials
      }
    )
  )(Footer)
)
