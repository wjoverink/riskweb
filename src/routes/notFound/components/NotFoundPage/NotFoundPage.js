import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import Footer from '../../../../containers/Footer'

class NotFoundPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = 'Oooops page not found'
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo, styles.popular)}>
              <h2>Oooops page not found</h2>
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

export default NotFoundPage
