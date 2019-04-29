import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import arrowleft from '../../../../images/icon-left-arrow.svg'
import arrowRight from '../../../../images/icon-right-arrow.svg'
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { getCarousel } from '../../../../redux/actions/carousel'
import getText from '../../../../library/util/skeletonText'
import ImageLoader from '../../../../library/components/PreloadImage'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'

class MainCarousel extends PureComponent {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.getCarousel()
    }
  }

  render() {
    const items = isEmpty(this.props.items) ? [] : this.props.items

    return (
      <Carousel
        nextIcon={<img alt="next slide" src={arrowRight} />}
        prevIcon={<img alt="previous slide" src={arrowleft} />}
        pauseOnHover={true}
        className={css(styles.carousel)}
      >
        {items.map(item => (
          <Carousel.Item key={item.id}>
            <ImageLoader
              style={{
                backgroundColor: '#ddd'
              }}
              className={css(styles.img)}
              size={item.size || { width: 150, height: 150 }}
              img={item.img}
              alt={item.name}
            />
            <Carousel.Caption>
              <p>{getText(item.text ? `« ${item.text} »` : undefined, 3)}</p>
              <p className={css(styles.name)}>{getText(item.name)}</p>
              {item.company && <p className={css(styles.company)}>{getText(item.company)}</p>}
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
  img: {
    margin: '0 auto',
    display: 'block',
    position: 'relative'
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
      company: PropTypes.string,
      size: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
      })
    })
  ),
  getCarousel: PropTypes.func.isRequired
}

MainCarousel.defaultProps = {
  items: [{}]
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
