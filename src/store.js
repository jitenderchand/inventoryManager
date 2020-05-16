import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



const reducer= combineReducers({
  objectTypes: () => {
    return null
  },
  ObjectTypesField: () => {
    return null
  },
  Inventory: () => {
    return null
  },
});

const middlewares= [];
middlewares.push(thunk);
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);
export { store };
