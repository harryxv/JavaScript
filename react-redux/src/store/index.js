// src/store/index.js  //rootReducerFile
import {createStore} from "redux";
import rootRecuder from "./reducers/rootReducer"

const initState ={
    auth:null,
    project:null
}
const store = createStore(rootRecuder,initState);

export default store;
