import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todocomp extends Component {

    getStyle = () =>
    {
        if(this.props.todo.completed)
        {
            return {color:"blue"}
        }
        else return{ color:"red"}
        
    }


    render() {
        return (
            <div style = {this.getStyle()} >
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

Todocomp.prototypes ={
    todo: PropTypes.object.isRequired
};

export default Todocomp
