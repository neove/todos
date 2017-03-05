import React, {Component} from 'react'
import TodoItem from './todoItem'
export default class TodoList extends Component{
    constructor(p){
        super(p)
    }
    render (){
        let {todos,acTodoItem} = this.props;
        return <div>
        {todos.map((item ,index) =>{
             return <TodoItem key={index} index={index} item ={item} {...acTodoItem}/>
        })}
        </div>
    }
}