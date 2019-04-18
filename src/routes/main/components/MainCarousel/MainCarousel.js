import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import arrowleft from '../../../../images/arrow-left.png'
import arrowRight from '../../../../images/arrow-right.png'
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { getCarousel } from '../../../../redux/actions/carousel'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'

class MainCarousel extends PureComponent {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.getCarousel()
    }
  }

  render() {
    const { items } = this.props
    return (
      <Carousel
        nextIcon={<img alt="next slide" src={arrowRight} />}
        prevIcon={<img alt="previous slide" src={arrowleft} />}
        pauseOnHover={true}
        className={css(styles.carousel)}
      >
        {items.map(item => (
          <Carousel.Item key={item.id}>
            <PreloadImage
              style={{
                ...item.size,
                margin: '0 auto',
                display: 'block',
                backgroundColor: '#ddd',
                position: 'relative'
              }}
              src={item.img}
              alt={item.name}
            />
            <Carousel.Caption>
              <p>{`« ${item.text} »`}</p>
              <p className={css(styles.name)}>{item.name}</p>
              {item.company && <p className={css(styles.company)}>{item.company}</p>}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  carousel: {
    height: 564,
    paddingTop: 73,
    marginBottom: 65,
    ':nth-child(1n) .carousel-item': {
      margin: '0 auto',
      maxWidth: 1050
    }
  },
  name: {
    fontSize: 21
  },
  company: {
    fontSize: 12,
    color: '#bebebe'
  }
})

MainCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      company: PropTypes.string
    })
  ),
  getCarousel: PropTypes.func.isRequired
}

MainCarousel.defaultProps = {
  items: []
}

const mapStateToProps = createSelector(
  [state => state.carousel],
  function (items) {
    return {
      items
    }
  }
)

export default connect(
  mapStateToProps,
  { getCarousel }
)(MainCarousel)
