import axios from "axios";
import { GET_PRODUCT } from "./types";

export const getProduct = (productId) => async (dispatch) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: "<token>",
    };
    const graphqlQuery = {
      operationName: "getProduct",
      query: `query getProduct {product(id: "${productId}"){id name inStock gallery description category attributes{id name type items{displayValue value id}} prices{currency{label symbol} amount} brand}}`,
      variables: {},
    };

    const response = await axios({
      url: "http://localhost:4000/graphql",
      method: "POST",
      headers,
      data: graphqlQuery,
    });


    dispatch({
      type: GET_PRODUCT,
      payload: response.data.data.product,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};
