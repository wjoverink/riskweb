import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import Cards from '../../../../library/components/cardGroup/CardGroup'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { getProducts } from '../../../../redux/actions/products'
import PropTypes from 'prop-types'
import { take } from 'lodash'

class ProductCardGroup extends PureComponent {
  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.getProducts()
    }
  }

  render() {
    const { products } = this.props
    const loadProducts = products.length > 0 ? products : [{}, {}, {}, {}]
    return <Cards className={css(styles.cardsProducts)} cards={loadProducts} size={{ width: 233, height: 296 }} />
  }
}

const styles = StyleSheet.create({
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
  }
})

ProductCardGroup.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      img: PropTypes.string,
      footer: PropTypes.shape({
        url: PropTypes.string,
        buttonText: PropTypes.string
      })
    })
  ),
  getProducts: PropTypes.func.isRequired
}

ProductCardGroup.defaultProps = {
  products: []
}

const mapStateToProps = createSelector(
  [state => state.products],
  function (products) {
    return {
      products: take(products, 4).map(product => ({
        title: product.name,
        text: product.text,
        img: product.img,
        footer: {
          // url: `/products/${product.id}`,
          url: `/quiz/${product.id}/`,
          buttonText: 'MORE'
        }
      }))
    }
  }
)

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductCardGroup)
