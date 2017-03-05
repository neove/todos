
/**action constants***/
export const ADD_TODO ='ADD_TODO'
export const DELETE_TODO ='DELETE_TODO'
export const SET_VISIBLE_FILTER='SET_VISIBLE_FILTER'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const UNDO = 'UNDO'
export const REDO = 'REDO'
/**action constants***/

const actionCreators = {
    undo:()=>{
        return {type:UNDO}
    },
    redo:()=>{
        return {type:REDO}
    },
    acHeader:{
        addTodo : (item)=>{
            return {type:ADD_TODO , payload:{text:item,isDone:false}}
        }
    },
    acTodoList:{
        acTodoItem:{
            deleteTodo:(index)=>{
                return {type : DELETE_TODO , index}
            },
            toggleStatus:(index,status)=>{
                return {type:TOGGLE_STATUS,index,status}
            }
        }
    },
    acFooter:{
        setVisibleFilter:(filter)=>{
            return {type:SET_VISIBLE_FILTER,filter}
        }
    }
}
export default actionCreators;