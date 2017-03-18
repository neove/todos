import {ADD_TODO, DELETE_TODO, SET_VISIBLE_FILTER,TOGGLE_STATUS} from './action'
import {DONE,UNDO,ALL} from '../constants'
import {createReducer} from './utils'
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
        addTodo :(state,action) =>{
            return state.push(Map(action.payload))
        },
        deleteTodo : (state,action) =>{
            return state.delete(action.index)
        },
        toggleStatus :(state,action)=>{
            return state.setIn([action.index,'isDone'],action.status)
        }
    },
    visibleFilter:{
        setVisibleFilter :(state,action) =>{
            return state            
        }
    }
}


/**slice reducer**/
const todosReducer = createReducer(initialState.get('todos'),{
    [ADD_TODO]:rootHandlers.todos.addTodo,
    [DELETE_TODO]:rootHandlers.todos.deleteTodo,
    [TOGGLE_STATUS]:rootHandlers.todos.toggleStatus
})

const visibleFilterReducer = createReducer(initialState.get('visibleFilter'),{
    [SET_VISIBLE_FILTER]:rootHandlers.visibleFilter.setVisibleFilter
})
/**end slice reducer**/

export default (state = initialState,action)=>{//在这里指定初始state
    return state.set('todos',todosReducer(state.todos,action))
            .set('setVisibleFilter',visibleFilterReducer(state.visibleFilter,action))
}
/**end combine reducers**/




