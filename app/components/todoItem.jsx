import React,{Component} from 'react'
export default class TodoItem extends Component {
    constructor (p){
        super(p)
    }
    handleDelete =(index)=>()=>{
        let {deleteTodo} = this.props;
        deleteTodo(index);
    }
    handleChangeStatus =(e)=>{
        let {toggleStatus,index} = this.props;
        toggleStatus(index,e.target.checked)
    }
    
    render (){
        let {item,index} = this.props;
        return <div className='todo-item'>
            <input className='todo-check' type='checkbox' checked = {item.isDone} onChange = {this.handleChangeStatus}></input>
            <div className='todo-value'>{item.text}</div>
            <button className='todo-del' onClick={this.handleDelete(index)}>Delete</button>
        </div>
    }
}