import {ADD_TODO, DELETE_TODO, SET_VISIBLE_FILTER,TOGGLE_STATUS} from './action'
import {DONE,UNDO,ALL} from '../constants'
import {sliceReducers,createReducer} from './utils'
import {combineReducers} from 'redux'
import {fromJS,Map} from 'immutable'
/**定义初始state**/
export const initialState =fromJS( 
    {
        todos:[],
        visibleFilter:ALL
    }
)

/**根hanlder**/
const rootHandlers = {
    todos:{
        [ADD_TODO] :(state,action) =>{
            return state.push(Map(action.payload))
        },
        [DELETE_TODO] : (state,action) =>{
            return state.delete(action.index)
        },
        [TOGGLE_STATUS] :(state,action)=>{
            return state.setIn([action.index,'isDone'],action.status)
        }
    },
    visibleFilter:{
        [SET_VISIBLE_FILTER] :(state,action) =>{
            return state            
        }
    }
}


/**slice reducer**/
const reducers = sliceReducers(initialState,rootHandlers)

export default (state = initialState,action)=>{//在这里指定初始state

    return state.set('todos',reducers.todos(state.get('todos'),action))
            .set('visibleFilter',reducers.visibleFilter(state.get('visibleFilter'),action))
}
/**end combine reducers**/




