import { combineReducers } from "redux";
import products from "./products";
import cards from "./cards";
import carousel from "./carousel";

export default combineReducers({
  products,
  cards,
  carousel
});
