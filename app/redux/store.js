import {applyMiddleware,createStore} from 'redux'
import reducer from './reducer'
import createLogger from 'redux-logger'
import undoableReducer from './reducerEnhancer'

export const store = createStore(
    undoableReducer(reducer),
    applyMiddleware(createLogger())
)
//监听
store.subscribe(()=>{
    console.log(store.getState())
})