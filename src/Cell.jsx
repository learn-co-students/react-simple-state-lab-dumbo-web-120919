import React from 'react'
// import React, { Component } from 'react'
 
export default class Cell extends React.Component {
    constructor(props) {
        super(props)
    // console.log(props.value)
        this.state = {
             color: props.value
        }
    }

    handleclick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        console.log()
        return (
            <div
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleclick}
            >
                
            </div>
        )
    }
    
}