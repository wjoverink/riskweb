import { css, StyleSheet } from "aphrodite/no-important";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar className={css(styles.Menu)} bg="light" expand="lg">
        <Navbar.Brand className="mr-auto" href="#home">
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
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#link">Product 2</Nav.Link>
            <Nav.Link href="#link">Product 3</Nav.Link>
            <Nav.Link href="#link">Product 4</Nav.Link>
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
    padding: 0
  },
  button: {
    width: 100,
    marginRight: 39
  }
});

export default Menu;
