import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
// import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import PropTypes from "prop-types";
import ScrollInNav from "../../../library/components/scrollIn/ScrollInNav";

class Menu extends PureComponent {
  render() {
    // const { products } = this.props;
    return (
      <Navbar sticky="top" className={css(styles.Menu)} expand="lg">
        <Navbar.Brand className="mr-auto logoText" href="/">
          RSURANCE
        </Navbar.Brand>
        <Nav>
          <ScrollInNav className={css(styles.ScrollInNav)} scrollInHeight={420}>
            <Button
              className={css(styles.button)}
              variant="secondary"
              href={"/quiz/1"}
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
      </Navbar>
    );
  }
}

const styles = StyleSheet.create({
  Menu: {
    height: 69,
    padding: "0 36px",
    backgroundColor: "white",
    ":nth-child(1n) .nav-link": {
      fontSize: 16,
      fontWeight: "bold"
    }
  },
  ScrollInNav: {
    display: "flex",
    height: 69,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {
    width: 200,
    marginRight: 39
    // boxShadow: "0px 4px 10px -5px rgba(255,0,131,0.5)"
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
