import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

class Menu extends PureComponent {
  render() {
    const { products } = this.props;
    return (
      <Navbar className={css(styles.Menu)} expand="lg">
        <Navbar.Brand className="mr-auto logoText" href="/">
          RSURANCE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const styles = StyleSheet.create({
  Menu: {
    height: 69,
    margin: "0 36px",
    padding: 0,
    ":nth-child(1n) .nav-link": {
      fontSize: 16,
      fontWeight: "bold"
      // color: "#4d4d4d"
    }
  },
  button: {
    width: 100,
    marginRight: 39
  }
});

Menu.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  )
};

Menu.defaultProps = {
  products: []
};

function mapStateToProps({ products }) {
  return {
    products
  };
}
export default connect(mapStateToProps)(Menu);
