import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./main/footer/Footer";
import Loader from "../library/components/loader/loader";
import Menu from "./main/menu/Menu";

const HomePage = lazy(() => import("./main/HomePage"));
const ProductPage = lazy(() => import("./product/ProductPage"));
const SupportPage = lazy(() => import("./support/SupportPage"));
const ContactPage = lazy(() => import("./contact/ContactPage"));
const FAQPage = lazy(() => import("./faq/FAQPage"));

class MainWrapper extends PureComponent {
  render() {
    return (
      <div className={css(styles.mainWrapper)}>
        <Menu />

        <Suspense
          fallback={
            <div className={css(styles.mainWrapper, styles.wrapper)}>
              <Loader />
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/support" component={SupportPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/products/:productId" component={ProductPage} />
          </Switch>
        </Suspense>
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
  },
  wrapper: {
    minHeight: 600,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MainWrapper;
