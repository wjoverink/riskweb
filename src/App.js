import React, { Component } from "react";
import "./App.css";
import MainWrapper from "./screens/main/MainWrapper";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return <MainWrapper />;
  }
}

export default withRouter(App);
