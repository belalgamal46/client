import axios from "axios";
import { SET_CURRENCY, GET_CURRENCIES } from "./types";

export const getCurrencies = () => async (dispatch) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: "<token>",
    };
    const graphqlQuery = {
      operationName: "getCurrencies",
      query: `query getCurrencies{currencies{label symbol}}`,
      variables: {},
    };

    const response = await axios({
      url: "http://localhost:4000/graphql",
      method: "POST",
      headers,
      data: graphqlQuery,
    });

    // console.log("actions",response.data.data.currencies);

    dispatch({
      type: GET_CURRENCIES,
      payload: response.data.data.currencies,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const setCurrency = (label) => (dispatch) => {
  dispatch({
    type: SET_CURRENCY,
    payload: label,
  });
};
