import { GET_CATEGORIES, GET_PRODUCTS } from "./types";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    const endpoint = "http://localhost:4000/graphql";
    const headers = {
      "content-type": "application/json",
      Authorization: "<token>",
    };
    const graphqlQuery = {
      operationName: "getCategories",
      query: `query getCategories{categories{name}}`,
      variables: {},
    };

    const response = await axios({
      url: endpoint,
      method: "POST",
      headers,
      data: graphqlQuery,
    });

    dispatch({
      type: GET_CATEGORIES,
      payload: response.data.data.categories,
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const endpoint = "http://localhost:4000/graphql";
    const headers = {
      "content-type": "application/json",
      Authorization: "<token>",
    };
    const graphqlQuery = {
      operationName: "getProducts",
      query: `query getProducts{categories{name products{id name inStock gallery prices{currency{label symbol}amount}}}}`,
      variables: {},
    };

    const response = await axios({
      url: endpoint,
      method: "POST",
      headers,
      data: graphqlQuery,
    });

    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.data.categories,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
