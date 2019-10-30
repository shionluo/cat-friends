import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

//-- Reducer --//
import { searchCats, requestCats } from "../reducers/reducer";

//----------------------------------------------------//
//----------------------------------------------------//

const rootReducer = combineReducers({ searchCats, requestCats });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));