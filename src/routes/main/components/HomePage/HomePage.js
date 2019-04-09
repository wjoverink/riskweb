import { css, StyleSheet } from 'aphrodite/no-important'
import React, { lazy, PureComponent, Suspense } from 'react'
import Cards from '../../../../library/components/cardGroup/CardGroup'
import { connect } from 'react-redux'
import Footer from '../../../../containers/Footer'
import Header from '../Header'
import MiniLoader from '../../../../library/components/miniLoader/MiniLoader'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'

const MainCarousel = lazy(() => import('../MainCarousel/'))

class MainPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = this.props.page.title
  }

  render() {
    const { page, products } = this.props
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo, styles.popular)}>
              <h2>{page.block2.header}</h2>
              <Cards className={css(styles.cardsProducts)} cards={products} size={{ width: 233, height: 296 }} />
            </div>
          </div>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo)}>
              <h3>{page.block3.header}</h3>
              <p className={css(styles.text)}>{page.block3.text}</p>
              <PreloadImage
                src={page.block3.img.src}
                alt={page.block3.img.alt}
                duration={150}
                lazy
                style={{
                  backgroundColor: page.block3.img.color,
                  width: '100%',
                  minHeight: 400,
                  position: 'relative',
                  margin: '35px 0px 45px 0px'
                }}
              />
              <Cards className={css(styles.cards)} cards={page.block3.cards} />
            </div>
          </div>
          <Suspense fallback={<MiniLoader className={css(styles.miniLoader)} />}>
            <MainCarousel />
          </Suspense>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    maxWidth: 640,
    margin: '0 auto',
    marginTop: 20,
    padding: '0 20px'
  },
  miniLoader: {
    height: 564,
    paddingTop: 73,
    marginBottom: 65,
    maxWidth: 1050
  },
  cardsProducts: {
    marginTop: '4rem',
    ':nth-child(1n) .card>div:first-child': {
      margin: '0 auto'
    },
    ':nth-child(1n) .card': {
      minWidth: 200
    },
    ':nth-child(1n) .card-body': {
      padding: '1rem 24px 1rem 0'
    },
    ':nth-child(1n) .card-footer': {
      padding: '1rem 24px 1rem 0'
    },
    padding: '0 30px'
  },
  cards: {
    margin: '0px 20px',
    ':nth-child(1n) .card>div:first-child': {
      marginLeft: -8
    },
    ':nth-child(1n) .card': {
      padding: '0 40px',
      '@media (max-width: 500px)': {
        padding: '0 30px'
      }
    },
    ':nth-child(1n) .card-body': {
      padding: '1rem 0px'
    }
  },
  popular: {
    '@media (min-width: 1000px)': {
      textAlign: 'left'
    }
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
    padding: '54px 0px 100px 0px',
    marginTop: -1
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
})

function mapStateToProps({ products, pages }) {
  return {
    products: products.map(product => ({
      title: product.name,
      text: product.text,
      img: product.img,
      footer: {
        // url: `/products/${product.id}`,
        url: '/quiz',
        buttonText: 'MORE'
      }
    })),
    page: pages.find(page => page.name === 'mainPage')
  }
}

MainPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    block1: PropTypes.object,
    block2: PropTypes.object,
    block3: PropTypes.object
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      img: PropTypes.string,
      footer: PropTypes.shape({
        url: PropTypes.string,
        buttonText: PropTypes.object
      })
    })
  )
}

export default connect(mapStateToProps)(MainPage)
