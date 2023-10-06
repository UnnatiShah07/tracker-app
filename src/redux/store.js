import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { trackerReducer } from "./reducer";

export const store = createStore(trackerReducer, applyMiddleware(thunk));
