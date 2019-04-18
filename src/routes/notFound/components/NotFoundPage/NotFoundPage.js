import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import PoweredBySkoutLogo from '../../../../library/components/logos/PoweredBySkoutLogo'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'

class NotFoundPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = this.props.page.title
  }

  render() {
    const {
      page: {
        title,
        block1: { header },
        img
      }
    } = this.props
    return (
      <React.Fragment>
        <main>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo, styles.popular)}>
              <PreloadImage
                style={{
                  ...img.size,
                  margin: '0 auto',
                  display: 'block',
                  backgroundColor: img.color,
                  position: 'relative',
                  marginBottom: 36
                }}
                lazy
                duration="20ms"
                src={img.src}
                alt={img.alt}
              />
              <h3>{title}</h3>
              <h5>{header}</h5>
              <h3>404</h3>
              <Button className={css(styles.button)} variant="secondary" href={'/'}>
                GET SECURED
              </Button>
              <PoweredBySkoutLogo className={`${css(styles.skout)} d-lg-block`} />
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: 20
  },
  button: {
    // marginLeft: "auto",
    marginTop: 50,
    width: 234
  },
  skout: {
    margin: '200px auto 0 auto'
  },
  mainInfo: {
    maxWidth: 1050,
    paddingTop: 20,
    margin: '0 auto',
    textAlign: 'center'
  },
  border: {
    // border: '1px solid #dfdfdf',
    // borderLeft: 0,
    // borderRight: 0,
    // borderTop: 0,
    padding: '54px 0px 100px 0px',
    marginTop: -1,
    backgroundColor: '#f6f6f6'
  }
})

const mapStateToProps = createSelector(
  [state => state.pages.notfound],
  function (page) {
    return {
      page
    }
  }
)

NotFoundPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    block1: PropTypes.shape({
      header: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
export default connect(mapStateToProps)(NotFoundPage)
