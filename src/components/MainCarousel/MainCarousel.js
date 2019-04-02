import { css, StyleSheet } from "aphrodite/no-important";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class MainCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Carousel className={css(styles.carousel)}>
        <Carousel.Item>
          <div
            style={{
              width: 136,
              height: 136,
              backgroundColor: "black",
              margin: "0 auto",
              borderRadius: 136
            }}
          />
          <Carousel.Caption>
            <p>
              « SkOUT connected with our team, provided us insights into the
              risks associated with cyber risk. Their affordable, world class
              Cyber Risk Insurance has provided our company and employees
              complete peace of mind. »
            </p>
            <p className={css(styles.name)}>Gary Vaynerchuk</p>
            <p className={css(styles.company)}>VaynerMedia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              width: 136,
              height: 136,
              backgroundColor: "black",
              margin: "0 auto",
              borderRadius: 136
            }}
          />
          <Carousel.Caption>
            <p>
              « SkOUT connected with our team, provided us insights into the
              risks associated with cyber risk. Their affordable, world class
              Cyber Risk Insurance has provided our company and employees
              complete peace of mind. »
            </p>
            <p className={css(styles.name)}>Gary Vaynerchuk</p>
            <p className={css(styles.company)}>VaynerMedia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              width: 136,
              height: 136,
              backgroundColor: "black",
              margin: "0 auto",
              borderRadius: 136
            }}
          />
          <Carousel.Caption>
            <p>
              « SkOUT connected with our team, provided us insights into the
              risks associated with cyber risk. Their affordable, world class
              Cyber Risk Insurance has provided our company and employees
              complete peace of mind. »
            </p>
            <p className={css(styles.name)}>Gary Vaynerchuk</p>
            <p className={css(styles.company)}>VaynerMedia</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    height: 564,
    paddingTop: 73,
    ":nth-child(1n) .carousel-item": {
      margin: "0 auto",
      maxWidth: 1050,
      fontSize: 26
    }
  },
  name: {
    fontSize: 21
  },
  company: {
    fontSize: 12,
    color: "#bebebe"
  }
});

export default MainCarousel;
