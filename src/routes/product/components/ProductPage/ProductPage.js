import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ProductPage extends PureComponent {
  constructor(props) {
    super(props)

    document.title = this.props.product.name
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
            <img alt={name} src={`/${img}`} />
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
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired
}

// ProductPage.defaultProps = {
//   product: undefined,
// };

function mapStateToProps({ products }, { match }) {
  return {
    product: products.find(p => p.id === match.params.productId)
  }
}

export default connect(mapStateToProps)(ProductPage)
