import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Header extends PureComponent {
  render() {
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.wrapper)}>
          <h1>
            Cyber Risk & Analytics Coverage. <br /> Because everyone deserves to
            be secure.
          </h1>
          <blockquote>
            Get started now to speak to a SkOUT broker, consultant or risk
            manager
          </blockquote>
          <Form className={css(styles.form)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control placeholder="First name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control placeholder="Last name" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Button
              className={css(styles.button)}
              variant="secondary"
              type="submit"
            >
              Get started
            </Button>
          </Form>
          <aside className={css(styles.skout)}>
            <span style={{ fontSize: 72, fontWeight: 500 }}>SKOUT</span>
            <span>Cybersecurity</span>
          </aside>
        </div>
      </header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundImage: "linear-gradient(#22bf95, #37a4e6)",
    color: "white",
    padding: "100px 100px 77px 100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  skout: {
    position: "absolute",
    textTransform: "uppercase",
    right: 0,
    bottom: 0,
    maxWidth: 235,
    overflowWrap: "break-word",
    textAlign: "center"
  },
  button: {
    marginLeft: "auto",
    display: "block",
    width: 234
  },
  wrapper: {
    maxWidth: 1050,
    position: "relative"
  },
  form: {
    maxWidth: 480,
    marginTop: 58
  }
});

export default Header;
