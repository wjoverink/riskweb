import { css, StyleSheet } from "aphrodite/no-important";
import React, { PureComponent } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SocialIcon } from "react-social-icons";
import footer from "../../../settings/footer";

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
              <Nav.Item className={css(styles.header)}>
                {footer.menuHeader}
              </Nav.Item>
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
            <Nav className="flex-column social">
              <Nav.Item className={css(styles.header)}>
                {footer.socialHeader}
              </Nav.Item>
              <Nav>
                {footer.socials.map((social, i) => (
                  <Nav.Item key={social.url}>
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
          <p className={css(styles.bottomtext)}>{footer.copy}</p>
        </div>
      </footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 347,
    backgroundColor: "#f6f6f6",
    textAlign: "center",
    padding: "0 30px"
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
    ":nth-child(1n) .navbar>.navbar-nav": {
      marginTop: 6,
      marginLeft: "2em"
    },
    ":nth-child(1n) .navbar>.social": {
      marginLeft: 0
    },
    ":nth-child(1n) .social .navbar-nav": {
      flexWrap: "nowrap!important",
      flexDirection: "row!important"
    },
    ":nth-child(1n)>nav .nav-link": {
      padding: 0
    }
  },
  menu: {}
});

export default Footer;
