import {createStore} from 'redux'
import reducer from './reducer'
console.dir(reducer)
export const store = createStore(reducer)
console.log(store.getState(),'@@@@')
// store.dispatch( {type:"ADD_TODO" , payload:"item"})
//监听
store.subscribe(()=>{
    console.log(store.getState())
})