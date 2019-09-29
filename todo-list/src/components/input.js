import React, { Component } from 'react';

import Display from './Display'

let list = []

class Input extends Component{
    constructor(props){
        super(props);

        this.state={
            listValue:[]
        }
    }

    onChange =(e) =>{
        [e.target.name]=e.target.value
    }
    onSubmit= (e) =>{
        e.preventDefault();
    }

    addToList = () => {
        var x=document.getElementById('todo').value
        list.push(x)
        this.setState({
            listValue:list
        })
        console.log('list value',this.state.listValue)
    }

    render(){ 
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter Todo" name="input" id='todo'></input>
                <button onClick={this.addToList} value="Submit">Add to List</button>
                
                <p>{this.state.listValue}something</p>
            </form>
            </div>
        )
    }
}

export default Input