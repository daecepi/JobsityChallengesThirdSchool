import { createStore } from "redux";

//Reducers
import reducer from "../reducers/index";

const store = createStore(reducer);

export default store;
