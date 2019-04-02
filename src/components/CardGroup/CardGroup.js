import { css, StyleSheet } from "aphrodite/no-important";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Usability</Card.Title>
            <Card.Text>
              Talk to a cyber expert who wants to make your business more secure
              now.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Comfortable</Card.Title>
            <Card.Text>
              Cyber Risk People that are Personable. Real human service without
              the Bots or forms.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Free updates</Card.Title>
            <Card.Text>
              Your Cyber insurance policy can always be up to date, providing
              you with complete peace of mind.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

const styles = StyleSheet.create({});

export default Cards;
