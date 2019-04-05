import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

class Header extends PureComponent {
  render() {
    const { header, subHeader } = this.props;
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.wrapper)}>
          <h1>{header}</h1>
          <blockquote>{subHeader}</blockquote>
          {/* <Form className={css(styles.form)}>
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
          </Form> */}
          <Button
            className={css(styles.button)}
            variant="secondary"
            type="submit"
            href={"/quiz"}
          >
            LETS DO THIS
          </Button>
          <aside className={`${css(styles.skout)}`}>
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
    alignItems: "center",
    "@media (max-width: 500px)": {
      padding: "100px 30px 77px 30px"
    }
  },
  skout: {
    textTransform: "uppercase",
    marginLeft: "auto",
    maxWidth: 235,
    overflowWrap: "break-word",
    textAlign: "center",
    "@media (max-width: 600px)": {
      margin: "40px auto"
    }
  },
  button: {
    // marginLeft: "auto",
    marginTop: 50,
    display: "block",
    width: 234
  },
  wrapper: {
    maxWidth: 1050,
    position: "relative",
    minHeight: 500
  }
  // form: {
  //   maxWidth: 480,
  //   marginTop: 58
  // }
});

Header.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired
};

function mapStateToProps({ pages }) {
  const mainPage = pages.find(page => page.name === "mainPage");
  return {
    header: mainPage.block1.header,
    subHeader: mainPage.block1.subHeader
  };
}

export default connect(mapStateToProps)(Header);
