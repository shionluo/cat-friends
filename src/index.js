import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import "tachyons";

//-- Reducer --//
import { searchCats, requestCats } from "./reducer";

//-- Components --//
import App from "./containers/App";

//-- Styles --//
import "./index.css";

//----------------------------------------------------//
//----------------------------------------------------//

const logger = createLogger();
const rootReducer = combineReducers({ searchCats, requestCats });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
