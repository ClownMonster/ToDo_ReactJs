import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todocomp extends Component {

    getStyle = () =>
    {   
        return{
        background:this.props.todo.completed ? ' #a6acaf ': ' #fdfefe ' ,
        padding:'0.4rem',
        border: '1px solid  #979a9a ',
        boxShadow: '2px 2px 2px 1px black',
        width:'60%',
        position:'relative',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)'

        }
    }


    



    render() {

        const {id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()} >
                <p >
                    <input type="checkbox" onChange={this.props.mark_complete.bind(this,id)} style = {input_style} />{ '   ' }{ ' ' }
                    {title}
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

const input_style = {
    borderRadius:'50%',
    cursor:'pointer',
    border:'2px solid green',

}



export default Todocomp
