import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import PropTypes from "prop-types";
import PreloadImage from "react-preload-image";

class Cards extends PureComponent {
  render() {
    const { cards, className, size } = this.props;
    return (
      <CardGroup className={className}>
        {cards.map((card, i) => (
          <Card>
            <PreloadImage
              style={{ ...size, position: "relative" }}
              variant="top"
              lazy
              src={card.img}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            {card.footer && (
              <Card.Footer>
                {card.footer.text && <span>{card.footer.text}</span>}
                {card.footer.url && (
                  <Button
                    className={css(styles.button)}
                    variant="secondary"
                    href={card.footer.url}
                  >
                    {card.footer.buttonText}
                  </Button>
                )}
              </Card.Footer>
            )}
          </Card>
        ))}
      </CardGroup>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: "auto",
    float: "right"
  }
});

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
};

Cards.defaultProps = {
  cards: [],
  size: { width: 32, height: 32 },
  className: undefined
};

export default Cards;
