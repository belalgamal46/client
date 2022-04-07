import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import currencyReducer from "./currencyReducer";

export default combineReducers({
  categories: categoriesReducer,
  currencies: currencyReducer,
});
