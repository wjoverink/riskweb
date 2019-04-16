import { css, StyleSheet } from 'aphrodite/no-important'
import React, { PureComponent } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import MiniLoader from '../../../library/components/miniLoader/MiniLoader'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'
import RouteButton from '../../../library/components/buttons/RouteButton'

class Cards extends PureComponent {
  render() {
    const { cards, className, size } = this.props
    return (
      <CardGroup className={className}>
        {cards.map((card, index) => (
          <Card key={card.title ? card.title.trim() : 'key' + index}>
            <PreloadImage style={{ ...size, position: 'relative' }} variant="top" src={card.img} />
            {card.isLoading && <MiniLoader style={{ ...size }} className={css(styles.loading)} />}
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            {card.footer && (
              <Card.Footer>
                {card.footer.text && <span>{card.footer.text}</span>}
                {card.footer.url && (
                  <RouteButton label={card.footer.buttonText} className={css(styles.button)} href={card.footer.url} />
                )}
              </Card.Footer>
            )}
          </Card>
        ))}
      </CardGroup>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute'
  },
  button: {
    marginLeft: 'auto',
    float: 'right'
  }
})

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      footer: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
        buttonText: PropTypes.string
      })
    })
  ),
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  className: PropTypes.string
}

Cards.defaultProps = {
  cards: [],
  size: { width: 32, height: 32 },
  className: undefined
}

export default Cards
