import { createStore, applyMiddleware } from 'redux';

//Redux thunk
//import thunk from 'redux-thunk';

//Reducers
import reducer from '../reducers/index'


const store = createStore(reducer);

export default store;