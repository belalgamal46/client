import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";

export default combineReducers({
  categories: categoriesReducer,
  currencies: currencyReducer,
  product: productReducer,
});
