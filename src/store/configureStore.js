import { createStore, compose } from "redux";
import rootReducer from "../redux/reducers";
import { firebase as fbConfig, rrfConfig } from "../settings/config";
import firebase from "firebase/app";
import "firebase/firestore"; // make sure you add this for firestore
import { reactReduxFirebase } from "react-redux-firebase";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/functions"; // <- needed if using httpsCallable
import { reduxFirestore } from "redux-firestore";

export default function configureStore(initialState, history) {
  // Initialize Firebase instance
  firebase.initializeApp(fbConfig);

  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore);

  const store = createStoreWithFirebase(rootReducer);

  return store;
}
