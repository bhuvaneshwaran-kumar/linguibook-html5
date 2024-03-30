import { applyMiddleware, createStore } from "redux" 
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import reducers from "../reducers"

export default createStore(reducers, applyMiddleware(thunk))