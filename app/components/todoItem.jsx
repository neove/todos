import React,{Component} from 'react'
export default class TodoItem extends Component {
    constructor (p){
        super(p)
    }
    render (){
        let {item } = this.props;
        return <div>{item}</div>
    }
}