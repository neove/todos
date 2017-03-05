import React,{Component} from 'react'
import Header from './header'
import TodoList from './todoList'
import {connect} from 'react-redux'
import{mapActionCreators} from '../redux/utils'
import actionCreators from '../redux/action'
// @connect(
//     state =>({
//         todos:stat.todos,
//         visibleFilter:state.visibleFilter
//     }),
//     dispath => mapActionCreators(actionCreators,dispath)
// )
class Todos extends Component{
    constructor(p){
        super(p)
    } 
    render(){
        this.props;
        debugger
        return <div className='todos-wrapper'>
            <Header/>
            <TodoList/>
        </div>
    }
}

const ConnectTodos = connect(
    state =>({
        todos:state.todos,
        visibleFilter:state.visibleFilter
    }),
    dispath => mapActionCreators(actionCreators,dispath)
)(Todos)

export default ConnectTodos;