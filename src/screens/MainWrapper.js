import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import ContactPage from "./contact/ContactPage";
import FAQPage from "./faq/FAQPage";
import Footer from "./main/footer/Footer";
import Menu from "./main/menu/Menu";
import HomePage from "./main/HomePage";
import ProductPage from "./product/ProductPage";
import { Route } from "react-router-dom";
import SupportPage from "./support/SupportPage";

class MainWrapper extends PureComponent {
  render() {
    return (
      <div className={css(styles.mainWrapper)}>
        <Menu />
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/faq" component={FAQPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/contact" component={ContactPage} />
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
