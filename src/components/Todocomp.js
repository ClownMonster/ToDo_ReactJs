import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todocomp extends Component {

    getStyle = () =>
    {   
        return{
        background:this.props.todo.completed ? ' #c0392b ': ' #1a5276 ' ,
        padding:'0.4rem',
        border: '1px solid  #979a9a ',
        boxShadow: '2px 2px 2px 1px black'



        }
    }


    input_style = () =>{
        return{
            cursor:'pointer',
            border:'2px solid white'

        }
    }



    render() {

        const {id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.mark_complete.bind(this,id)} style = {this.input_style()} />{ '   ' }
                    {title}
                    
                </p>
            </div>
        )
    }
}

Todocomp.prototypes ={
    todo: PropTypes.object.isRequired
};

export default Todocomp