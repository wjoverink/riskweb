import { css, StyleSheet } from "aphrodite/no-important";
import React, { Component } from "react";
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
          <MainCarousel />
        </main>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
});

export default MainPage;
