import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import torrentReducer from './torrent';

const rootReducer = combineReducers({
  torrent: torrentReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
