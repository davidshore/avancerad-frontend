import { legacy_createStore as createStore, compose } from "redux";
import { reducer } from "./reducer";

// Enable Redux DevTools Extension if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers());
