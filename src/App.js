import React, { Component } from "react";
import "./App.css";
import MainWrapper from "./screens/MainWrapper";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return <MainWrapper />;
  }
}

export default withRouter(App);
