import { combineReducers } from "redux";

import countryReducer from "./countryReducer";

const appReducer = combineReducers({
  countries: countryReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
