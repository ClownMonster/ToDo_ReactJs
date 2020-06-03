import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todocomp extends Component {

    getStyle = () =>
    {   
        return{
        background:this.props.todo.completed ? 'black': 'white',
        color:this.props.todo.completed ? 'white': 'black',
        padding:'0.3rem',
        marginBottom:'0.7rem',
        border: '1px solid  #979a9a ',
        width:'60%',
        position:'relative',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        textAlign:'center'

        }
    }


    



    render() {

        const {id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()} >
                <p >
                    <input style={btnStyle} onChange={this.props.mark_complete.bind(this,id)} class="form-check-input" type="checkbox" id="defaultCheck1"/>{' '}
                    <a >{title}</a>
                    { ' ' }
                    <button onClick={this.props.del_todo.bind(this, id)} style={btnStyle}>X</button>
                    
                </p>
            </div>
        )
    }
}

Todocomp.prototypes ={
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background:'red',
    cursor:'pointer',
    padding:'2px',
    borderRadius:'50%',
    color:'white',
    float:'right',
    outline:'none',
    


}



export default Todocomp
