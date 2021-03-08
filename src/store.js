import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'


const initialState = {}
const store = createStore(
  // create the store, apply the devtools
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store