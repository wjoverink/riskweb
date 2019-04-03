import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Cards from "../../library/components/cardGroup/CardGroup";
import { connect } from "react-redux";
import Header from "./header/Header";
import MainCarousel from "./mainCarousel/MainCarousel";

class MainPage extends PureComponent {
  render() {
    const { page, products } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo, styles.popular)}>
              <h2>{page.block2.header}</h2>
              <Cards
                className={css(styles.cardsProducts)}
                cards={products}
                size={{ width: 233, height: 296 }}
              />
            </div>
          </div>
          <div className={css(styles.border)}>
            <div className={css(styles.mainInfo)}>
              <h3>{page.block3.header}</h3>
              <p className={css(styles.text)}>{page.block3.text}</p>
              <img
                src={page.block3.img}
                alt={page.block3.alt}
                style={{
                  height: 411,
                  margin: "35px 0px 45px 0px"
                }}
              />
              <Cards className={css(styles.cards)} cards={page.block3.cards} />
            </div>
          </div>

          <MainCarousel />
        </main>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: 20
  },
  cardsProducts: {
    marginTop: "4rem",
    ":nth-child(1n) .card-body": {
      padding: "1rem 24px 1rem 0"
    },
    ":nth-child(1n) .card-footer": {
      padding: "1rem 24px 1rem 0"
    }
  },
  cards: {
    margin: "0px 20px",
    ":nth-child(1n) .card-img-top": {
      marginLeft: -8
    },
    ":nth-child(1n) .card": {
      padding: "0 60px"
    },
    ":nth-child(1n) .card-body": {
      padding: "1rem 0px"
    }
  },
  popular: {
    textAlign: "left"
  },
  mainInfo: {
    maxWidth: 1050,
    paddingTop: 20,
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

function mapStateToProps({ products, pages }) {
  return {
    products: products.map((product, i) => ({
      title: product.name,
      text: product.text,
      img: product.img,
      footer: {
        url: `/products/${product.id}`,
        buttonText: "MORE"
      }
    })),
    page: pages.find(page => page.name === "mainPage")
  };
}

export default connect(mapStateToProps)(MainPage);
