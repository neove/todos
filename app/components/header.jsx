import React, {Component} from 'react'
export default class Header extends Component{
    constructor(p){
        super(p);
        this.state={curValue:''}
    } 
    handleChange =(e)=>{
        this.setState({curValue:e.target.value})
    }
    handleAddTodo = (e)=>{
        if(e.keyCode != '13') return false;
        let {addTodo} = this.props;
        addTodo(this.state.curValue)
        this.setState({curValue:''});       
    }
    render(){
        let {addTodo} = this.props;
        let {curValue} = this.state;
        return <div className='todos-wrapper'>
            <input onChange={this.handleChange} value={curValue} onKeyDown = {this.handleAddTodo}/>
        </div>
    }
}