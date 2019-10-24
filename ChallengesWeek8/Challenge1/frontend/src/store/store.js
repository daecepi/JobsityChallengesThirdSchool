import { createStore, applyMiddleware } from 'redux';

//Redux thunk
import thunk from 'redux-thunk';

//Reducers
import reducer from '../reducers'


const store = createStore(reducer, applyMiddleware(thunk));

export default store;