import {ADD_TODO, DELETE_TODO, SET_VISIBLE_FILTER} from './action'
import {DONE,UNDO,ALL} from '../constants'
import {createReducer} from './utils'
import {combineReducers} from 'redux'
import {fromJS} from 'immutable'
/**定义初始state**/
const initialState =fromJS( 
    {
        todos:[],
        visibleFilter:ALL
    }
)

/**根hanlder**/
const rootHandlers = {
    todos:{
        addTodo :(state,action) =>{
            
        },
        deleteTodo : (state,action) =>{

        }
    },
    visibleFilter:{
        setVisibleFilter :(state,action) =>{

        }
    }
}


/**slice reducer**/
const todosReducer = createReducer(initialState.get('todos'),{
    [ADD_TODO]:rootHandlers.todos.addTodo,
    [DELETE_TODO]:rootHandlers.todos.deleteTodo
})

const visibleFilterReducer = createReducer(initialState.get('visibleFilter'),{
    [SET_VISIBLE_FILTER]:rootHandlers.visibleFilter.setVisibleFilter
})
/**end slice reducer**/


/**combine reducers : rootReducer**/
export default combineReducers({
    todos:todosReducer,
    visibleFilter:visibleFilterReducer
})
// export default (state = initialState,action)=>{ //在这里指定初始state

//     todos:todosReducer(state.todos,action)

//     visibleFilter:visibleFilterReducer(state.visibleFilter,action)
// }
/**end combine reducers**/




