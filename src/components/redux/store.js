import { createStore, combineReducers } from 'redux';
import agencyReducer from './agency/agencyReducer';
import ownerReducer from './owner/ownerReducer';

let store = createStore(
  combineReducers({
    agency: agencyReducer,
    owner: ownerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;