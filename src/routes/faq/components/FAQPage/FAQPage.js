import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Footer from '../../../../containers/Footer'
import PropTypes from 'prop-types'

class FAQPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = this.props.page.title
  }

  render() {
    const {
      page: {
        block1: { header }
      }
    } = this.props
    return (
      <React.Fragment>
        <main>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo, styles.popular)}>
              <h2>{header}</h2>
            </div>
          </div>
        </main>
        <Footer />
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
  mainInfo: {
    maxWidth: 1050,
    paddingTop: 20,
    margin: '0 auto',
    textAlign: 'center'
  },
  border: {
    border: '1px solid #dfdfdf',
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    padding: '54px 0px 100px 0px',
    marginTop: -1
  }
})

const mapStateToProps = createSelector(
  [state => state.pages],
  function (pages) {
    return {
      page: pages.find(page => page.name === 'faq')
    }
  }
)

FAQPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    block1: PropTypes.shape({
      header: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default connect(mapStateToProps)(FAQPage)
