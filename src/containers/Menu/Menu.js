import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
// import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import PropTypes from "prop-types";
import ScrollInNav from "../../library/components/scrollIn/ScrollInNav";

class Menu extends PureComponent {
  render() {
    // const { products } = this.props;
    return (
      <Navbar sticky="top" className={css(styles.menu)} expand="lg">
        <Navbar.Brand className="mr-auto logoText" href="/">
          RSURANCE
        </Navbar.Brand>
        <Nav>
          <ScrollInNav className={css(styles.scrollInNav)} scrollInHeight={420}>
            <Button
              className={css(styles.button)}
              variant="secondary"
              href={"/quiz"}
              size="sm"
            >
              LETS GET SECURED
            </Button>
          </ScrollInNav>
        </Nav>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Button
              className={css(styles.button)}
              variant="secondary"
              size="sm"
            >
              Buy Now
            </Button>
            {products.map((item, i) => (
              <Nav.Link href={`/products/${item.id}`}>{item.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse> */}
        <ScrollInNav
          className={css(styles.scrollinBorder)}
          scrollInHeight={600}
        >
          <div className={css(styles.border)} />
        </ScrollInNav>
      </Navbar>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 69,
    padding: "0 36px",
    backgroundColor: "white",
    ":nth-child(1n) .nav-link": {
      fontSize: 16,
      fontWeight: "bold"
    },
    "@media (max-width: 500px)": {
      padding: "0 30px"
    }
  },
  scrollinBorder: {
    bottom: 0,
    display: "flex"
  },
  border: {
    borderBottom: "1px solid #dfdfdf",
    alignSelf: " flex-end",
    position: "absolute",
    left: 0,
    right: 0
  },
  scrollInNav: {
    display: "flex",
    height: 69,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: "2!important"
  },
  button: {
    width: 200,
    marginRight: 39,
    "@media (max-width: 500px)": {
      width: "auto"
    }
  }
});

// Menu.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       img: PropTypes.string,
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       text: PropTypes.string
//     })
//   )
// };

// Menu.defaultProps = {
//   products: []
// };

// function mapStateToProps({ products }) {
//   return {
//     products
//   };
// }
// export default connect(mapStateToProps)(Menu);

export default Menu;
