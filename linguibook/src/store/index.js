import { applyMiddleware, createStore } from "redux" 
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from "../reducers"

// Enable tracing with Redux DevTools enhancer
const composeEnhancers = composeWithDevTools({
    trace: true, // Enable action tracing
});

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)))