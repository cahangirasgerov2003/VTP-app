import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";

import thunk from "redux-thunk";
import eventsReducer from "../reducers/eventReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    users: usersReducer,
    events: eventsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
