
/**action constants***/
export const ADD_TODO ='ADD_TODO'
export const DELETE_TODO ='DELETE_TODO'
export const SET_VISIBLE_FILTER='SET_VISIBLE_FILTER'
/**action constants***/

const actionCreators = {
    acHeader:{
        addTodo : (item)=>{
            return {type:ADD_TODO , payload:item}
        }
    },
    acTodoList:{
        acTodoItem:{
            deleteTodo:(index)=>{
                return {type : DELETE_TODO , payload:index}
            }
        }
    },
    acFooter:{
        setVisibleFilter:(filter)=>{
            return {type:SET_VISIBLE_FILTER,payload:filter}
        }
    }
}
export default actionCreators;