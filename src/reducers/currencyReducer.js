/* eslint-disable import/no-anonymous-default-export */
import { GET_CURRENCIES, SET_CURRENCY } from "../actions/types";

const initialState = {
  curr: [],
  currentCurrency: "USD",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };

    case GET_CURRENCIES:
      return {
        ...state,
        curr: action.payload,
      };

    default:
      return state;
  }
}
