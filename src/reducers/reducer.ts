//-- Constants --//
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "../constants";

import { ActionTypes } from "../types/action";

//----------------------------------------------------//
//----------------------------------------------------//

interface searchField {
  searchField: string;
}

const initialSearchField: searchField = {
  searchField: ""
};

export const searchCats = (
  state = initialSearchField,
  action: ActionTypes
): searchField => {
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

interface cats {
  cats: [];
  isPending: boolean;
  error: string;
}

const initialCats: cats = {
  cats: [],
  isPending: false,
  error: ""
};

export const requestCats = (state = initialCats, action: ActionTypes) => {
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
