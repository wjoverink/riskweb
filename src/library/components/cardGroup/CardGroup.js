import { css, StyleSheet } from "aphrodite/no-important";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import PropTypes from "prop-types";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CardGroup>
        {this.props.cards.map((card, i) => (
          <Card>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    );
  }
}

const styles = StyleSheet.create({});

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

Cards.defaultProps = {
  cards: []
};

export default Cards;
