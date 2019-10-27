//-- Constants --//
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "./constants";

//----------------------------------------------------//

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestCats = () => dispatch => {
  dispatch({ type: REQUEST_CATS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(cats => dispatch({ type: REQUEST_CATS_SUCCESS, payload: cats }))
    .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }));
};
