import { GET_CATEGORIES, GET_PRODUCTS } from "../actions/types";

const initialState = {
  categories: [],
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}
