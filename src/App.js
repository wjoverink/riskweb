import React, { Component } from "react";
import "./App.css";
import CreateRoutes from "./routes";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return <CreateRoutes />;
  }
}

export default withRouter(App);
