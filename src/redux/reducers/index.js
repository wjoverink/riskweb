import { combineReducers } from "redux";
import pages from "./pages";
import products from "./products";
import quiz from "./quiz";
import quizAnswers from "./quizAnswers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import "firebase/firestore"; // make sure you add this for firestore

export default combineReducers({
  products,
  pages,
  quiz,
  quizAnswers,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
