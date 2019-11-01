import { createStore } from "redux";

//Reducers
import reducer from "../reducers/index";

const store = createStore(reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
