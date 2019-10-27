//-- Constants --//
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "./constants";

//----------------------------------------------------//

const initialSearchField = {
  searchField: ""
};

export const searchCats = (state = initialSearchField, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

//----------------------------------------------------//

const initialCats = {
  cats: [],
  isPending: false,
  error: ""
};

export const requestCats = (state = initialCats, action = {}) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_CATS_SUCCESS:
      return {
        ...state,
        cats: action.payload,
        isPending: false
      };
    case REQUEST_CATS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};
