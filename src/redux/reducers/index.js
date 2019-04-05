import { combineReducers } from "redux";
import pages from "./pages";
import products from "./products";
import quiz from "./quiz";
import quizAnswers from "./quizAnswers";

export default combineReducers({
  products,
  pages,
  quiz,
  quizAnswers
});
