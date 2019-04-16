import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RouteButton from '../../../../library/components/buttons/RouteButton'
import SkoutLogo from '../../../../library/components/logos/SkoutLogo'

class Header extends PureComponent {
  render() {
    const { header, subHeader } = this.props
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.wrapper)}>
          <h1>{header}</h1>
          <blockquote>{subHeader}</blockquote>
          <RouteButton label={'LETS DO THIS'} className={css(styles.button)} href={'/quiz'} />
          <SkoutLogo className={`${css(styles.skout)}`} />
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundImage: 'linear-gradient(#22bf95, #37a4e6)',
    color: 'white',
    padding: '100px 100px 77px 100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 500px)': {
      padding: '100px 30px 77px 30px'
    }
  },
  skout: {
    float: 'right',
    margin: '53px auto 0px auto',
    '@media (max-width: 600px)': {
      margin: '40px auto',
      float: 'left'
    }
  },
  button: {
    // marginLeft: "auto",
    marginTop: 50,
    display: 'block',
    width: 234
  },
  wrapper: {
    maxWidth: 1050,
    position: 'relative',
    minHeight: 500
  }
  // form: {
  //   maxWidth: 480,
  //   marginTop: 58
  // }
})

Header.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired
}

function mapStateToProps({ pages }) {
  const mainPage = pages.find(page => page.name === 'mainPage')
  return {
    header: mainPage.block1.header,
    subHeader: mainPage.block1.subHeader
  }
}

export default connect(mapStateToProps)(Header)
