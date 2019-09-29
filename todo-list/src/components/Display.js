import React, { Component } from 'react';


class Display extends Component{

 state={
            listValue:this.props.toDisplay
        }
    
    render(){
        console.log('list length',this.state.listValue.length)
        if(this.state.listValue.length !== 0){

        for(var i=0;i<this.props.toDisplay.length;i++){
            return<p>{this.props.toDisplay[i]}</p>
        }
    }

    else{
        return <p>No ToDo List</p>
    }
        
    }
}

export default Display