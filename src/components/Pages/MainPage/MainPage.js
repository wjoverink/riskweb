import { css, StyleSheet } from "aphrodite/no-important";
import React, { Component } from "react";
import Cards from "../../CardGroup/CardGroup";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";
import MainCarousel from "../../MainCarousel/MainCarousel";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={css(styles.mainWrapper)}>
        <Menu />
        <Header />
        <main>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo)}>
              <h2>Popular SkOUT Security products</h2>
            </div>
          </div>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo)}>
              <h3>We know Cyber. Your Insurance Company Doesn’t.</h3>
              <p className={css(styles.text)}>
                Skout is a Cyber Risk and Insurance company for humans by
                humans. Skout’s trained team of cybersecurity and insurance
                professionals will train your team and ensure that the best
                processes and technologies are in place and ready to respond.
              </p>
              <div
                style={{
                  height: 411,
                  backgroundColor: "black",
                  margin: "35px 0px 45px 0px"
                }}
              />
              <Cards />
            </div>
          </div>

          <MainCarousel />
        </main>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: 20
  },
  mainInfo: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center"
  },
  border: {
    border: "1px solid #dfdfdf",
    borderLeft: 0,
    borderRight: 0,
    padding: "54px 0px 100px 0px",
    marginTop: -1
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
});

export default MainPage;
