//-- Constants --//
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "../constants";

import { Dispatch } from "redux";

//----------------------------------------------------//
//----------------------------------------------------//

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

//----------------------------------------------------//

const requestCatsPending = () => ({
  type: REQUEST_CATS_PENDING
});

const requestCatsSuccess = (cats: []) => ({
  type: REQUEST_CATS_SUCCESS,
  payload: cats
});

const requestCatsFailed = (error: any) => ({
  type: REQUEST_CATS_FAILED,
  payload: error
});

export const requestCats = () => (dispatch: Dispatch) => {
  dispatch(requestCatsPending());
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(cats => dispatch(requestCatsSuccess(cats)))
    .catch(error => dispatch(requestCatsFailed(error)));
};
