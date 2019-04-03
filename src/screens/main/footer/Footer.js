import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SocialIcon } from "react-social-icons";
import socials from "../../../settings/social"

class Footer extends PureComponent {
  render() {
    return (
      <footer className={css(styles.footer)}>
        <div className={css(styles.wrapper)}>
          <Navbar expand="lg">
            <Navbar.Brand className="logoText" href="/">
              RSURANCE
            </Navbar.Brand>
            <Nav className="flex-column mr-auto">
              <Nav.Item className={css(styles.header)}>Company</Nav.Item>
              <Nav.Item>
                <Nav.Link href="/faq">FAQs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/support">Support</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="flex-column">
              <Nav.Item className={css(styles.header)}>Follow us</Nav.Item>
              <Nav>
                {socials.socials.map((social, i) => (
                  <Nav.Item>
                  <SocialIcon
                    className={css(styles.marginRight)}
                    url={social.url}
                  />
                </Nav.Item>
                ))}
              </Nav>
            </Nav>
          </Navbar>
          <hr />
          <p className={css(styles.bottomtext)}>
            © 2019 SKOUT RSURANCE. All rights reserved
          </p>
        </div>
      </footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 347,
    backgroundColor: "#f6f6f6",
    textAlign: "center"
  },
  bottomtext: {
    fontSize: 13,
    color: "#6a6a6a"
  },
  marginRight: {
    marginRight: 5
  },
  header: {
    marginBottom: 10,
    fontSize: 16,
    color: "#000"
  },
  wrapper: {
    maxWidth: 1050,
    padding: "40px 0px 0px",
    position: "relative",
    margin: "0 auto",
    textAlign: "center",
    ":nth-child(1n)>nav": {
      alignItems: "flex-start",
      textAlign: "left",
      marginBottom: 120
    },
    ":nth-child(1n)>nav>.navbar-nav": {
      marginTop: 6,
      marginLeft: "2em"
    },
    ":nth-child(1n)>nav .nav-link": {
      padding: 0
    }
  },
  menu: {}
});

export default Footer;
