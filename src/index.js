import "firebase/database";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase/app";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import rootReducer from "./redux/reducers";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);
const config = {
  apiKey: "AIzaSyDfpuy73hTULR7DCZijiQLuyM5iVqAE6SM",
  authDomain: "rsurance-web.firebaseapp.com",
  databaseURL: "https://rsurance-web.firebaseio.com",
  projectId: "rsurance-web",
  storageBucket: "rsurance-web.appspot.com",
  messagingSenderId: "965473148228"
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FirebaseDatabaseProvider {...config} firebase={firebase}>
        <App />
      </FirebaseDatabaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
