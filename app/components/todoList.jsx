import React, {Component} from 'react'
export default class TodoList extends Component{
    constructor(p){
        super(p)
    }
    render (){
        let {todoList =[]} = this.props;
        return <div>
        {todoList.map((item ,index) =>{
            <TodoItem key={index}  item ={item}/>
        })}
        </div>
    }
}