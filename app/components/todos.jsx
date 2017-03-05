import React,{Component} from 'react'
import Header from './header'
import TodoList from './todoList'
import Footer from './footer'
import {connect} from 'react-redux'
import{mapActionCreators} from '../redux/utils'
import actionCreators from '../redux/action'

class Todos extends Component{
    constructor(p){
        super(p)
    } 
    render(){
        let {acHeader,acTodoList,acFooter,todos,undo,redo} = this.props;
        return <div className='todos-wrapper'>
            <button onClick={undo}>undo</button>
            <button onClick={redo}>redo</button>            
            <Header {...acHeader} />
            <TodoList {...acTodoList} todos={todos.toJS()} />
            <Footer {...acFooter} />
        </div>
    }
}


const ConnectTodos = connect(
    state =>({
        todos:state.get('present').todos,
        visibleFilter:state.visibleFilter
    }),
    dispath => mapActionCreators(actionCreators,dispath)
)(Todos)

export default ConnectTodos;


// @connect( 此语法需要ES7 支持
//     state =>({
//         todos:stat.todos,
//         visibleFilter:state.visibleFilter
//     }),
//     dispath => mapActionCreators(actionCreators,dispath)
// )