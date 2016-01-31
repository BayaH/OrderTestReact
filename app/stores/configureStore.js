import { combineReducers, createStore, applyMiddleware } from 'redux';
import { orders } from '../reducers/orders';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({orders});

export default function configureStore{

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

  return createStoreWithMiddleware(reducer);
}
