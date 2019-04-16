import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import PropTypes from 'prop-types'
import RouteButton from '../../library/components/buttons/RouteButton'
import ScrollInNav from '../../library/components/scrollIn/ScrollInNav'
import { withRouter } from 'react-router-dom'

class Menu extends PureComponent {
  render() {
    const { location, history } = this.props
    let hide = false
    if (location.pathname.match(/quiz/)) {
      hide = true
    }

    return (
      <Navbar sticky="top" className={css(styles.menu)} expand="lg">
        <Navbar.Brand
          className="mr-auto logoText"
          href={'/'}
          onClick={e => {
            e.preventDefault()
            history.push('/')
          }}
        >
          RSURANCE
        </Navbar.Brand>
        <Nav>
          {!hide && (
            <ScrollInNav className={css(styles.scrollInNav)} scrollInHeight={420}>
              <RouteButton
                label="LETS GET SECURED"
                className={css(styles.button)}
                variant="secondary"
                href={'/quiz'}
                size="sm"
              />
            </ScrollInNav>
          )}
        </Nav>
        <ScrollInNav className={css(styles.scrollinBorder)} scrollInHeight={600}>
          <div className={css(styles.border)} />
        </ScrollInNav>
      </Navbar>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 69,
    padding: '0 36px',
    backgroundColor: 'white',
    ':nth-child(1n) .nav-link': {
      fontSize: 16,
      fontWeight: 'bold'
    },
    '@media (max-width: 500px)': {
      padding: '0 30px'
    }
  },
  scrollinBorder: {
    bottom: 0,
    display: 'flex'
  },
  border: {
    borderBottom: '1px solid #dfdfdf',
    alignSelf: ' flex-end',
    position: 'absolute',
    left: 0,
    right: 0
  },
  scrollInNav: {
    display: 'flex',
    height: 69,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: '2!important'
  },
  button: {
    width: 200,
    marginRight: 39,
    '@media (max-width: 500px)': {
      width: 'auto'
    }
  }
})

Menu.propTypes = {
  location: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired
}

export default withRouter(Menu)
