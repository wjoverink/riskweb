import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";
import HomePage from "./HomePage";
import ProductPage from "../product/ProductPage";
import { Route } from "react-router-dom";

class MainWrapper extends PureComponent {
  render() {
    return (
      <div className={css(styles.mainWrapper)}>
        <Menu />
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products/:productId" component={ProductPage} />
        </React.Fragment>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
});

export default MainWrapper;
