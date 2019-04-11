import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button'
import PreloadImage from 'react-preload-image'

class NotFoundPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = 'Cyber Accidents Happen'
  }

  render() {
    const img = {
      src: '/images/leonard-navarro@2x.png',
      alt: 'Leonard Navarro',
      color: 'transparent',
      size: { width: 136, height: 136 }
    }
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
              <h3>Cyber Accidents Happen</h3>
              <h5>nothing we did not foresee</h5>
              <h3>404</h3>
              <Button className={css(styles.button)} variant="secondary" href={'/'}>
                GET SECURED
              </Button>
              <aside className={`${css(styles.skout)} d-lg-block`}>
                <span>POWERED BY</span>
                <span style={{ fontSize: 72, fontWeight: 500, marginTop: -30 }}>SKOUT</span>
              </aside>
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
    display: 'flex!important',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 500,
    marginTop: 200
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

export default NotFoundPage
