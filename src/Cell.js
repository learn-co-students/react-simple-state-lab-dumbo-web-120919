import React, { Component } from 'react';

class Cell extends Component{

    constructor(props){
        super()
        this.state = {
            color: props.value // ...define initial state with a key of 'color' set to the 'value' prop
        } 
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })// Create a click listener which, when activated, updates the state to the following hex value: '#333'
    }

    render(){
        return(
            <div className="cell" // Cell should render a single <div> with a className of cell
            style={{backgroundColor: this.state.color}} // In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} 
              //('#FFF' is just used as an example value here - the value should be state's color)
            onClick={this.handleClick}>
            </div> 

        )
    }

}

export default Cell;

