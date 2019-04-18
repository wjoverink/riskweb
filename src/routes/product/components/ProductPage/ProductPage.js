import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { getProducts } from '../../../../redux/actions/products'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'

class ProductPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = this.props.product.name
  }

  componentDidMount() {
    if (!this.props.product.id) {
      this.props.getProducts()
    }
  }

  render() {
    const {
      product: { name, img, text }
    } = this.props
    return (
      <main>
        <div className={css(styles.border)}>
          <div className={css(styles.mainInfo, styles.popular)}>
            <h2>{name}</h2>
            {img && (
              <PreloadImage
                style={{
                  width: 234,
                  height: 296,
                  backgroundColor: '#ddd',
                  position: 'relative',
                  margin: '0 auto'
                }}
                src={`/${img}`}
                alt={name}
              />
            )}
            <p>{text}</p>
          </div>
        </div>
      </main>
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

ProductPage.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string
  }),
  getProducts: PropTypes.func
}

ProductPage.defaultProps = {
  product: {
    img: undefined,
    name: 'rsurrance product',
    id: undefined,
    text: ''
  }
}

const mapStateToProps = createSelector(
  function ({ products }, { match }) {
    return { products, productId: match.params.productId }
  },
  function ({ products, productId }) {
    return {
      product: products.find(p => p.id === productId)
    }
  }
)

// function mapStateToProps({ products }, { match }) {
//   return {
//     product: products.find(p => p.id === match.params.productId)
//   }
// }

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductPage)
