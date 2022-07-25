import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
