import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { objectTypesReducer } from './modules/manage-types/reducers/object-types.reducer';
import { objectTypesFieldReducer } from './modules/manage-types/reducers/object-types-field.reducer';



const reducer= combineReducers({
  objectTypes: objectTypesReducer,
  objectTypesField: objectTypesFieldReducer,
  inventory: () => {
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
