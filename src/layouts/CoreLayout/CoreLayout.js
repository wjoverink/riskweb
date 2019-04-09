import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite/no-important";
import Menu from "../../containers/Menu";

export const CoreLayout = ({ children }) => (
  <div className={css(styles.mainWrapper)}>
    <Menu />
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

const styles = StyleSheet.create({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
});

export default CoreLayout;
