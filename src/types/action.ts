import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from "../constants";

export interface setSearchFieldAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: string;
}

export interface requestCatsPendingAction {
  type: typeof REQUEST_CATS_PENDING;
}

export interface requestCatsSuccessAction {
  type: typeof REQUEST_CATS_SUCCESS;
  payload: [];
}

export interface requestCatsFailedAction {
  type: typeof REQUEST_CATS_FAILED;
  payload: any;
}

export type ActionTypes =
  | setSearchFieldAction
  | requestCatsPendingAction
  | requestCatsSuccessAction
  | requestCatsFailedAction;
