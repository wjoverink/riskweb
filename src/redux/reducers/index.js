import { combineReducers } from "redux";
import pages from "./pages";
import products from "./products";

export default combineReducers({
  products,
  pages
});
