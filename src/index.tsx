import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "tachyons";

//-- Stores --//
import { store } from "./store/configureStore";

//-- Components --//
import App from "./containers/App";

//-- Styles --//
import "./index.css";

//-- Service Worker --//
import * as serviceWorker from "./serviceWorker";

//----------------------------------------------------//
//----------------------------------------------------//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
