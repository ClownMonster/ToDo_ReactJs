import React, { Component } from 'react'

export class Addtodo extends Component {

    inputStyle =  () =>{
        return{
            'background':'red'
        }
    }


    render() {
        return (
            <form>
                <input type="text" style={this.inputStyle()} placeholder="Enter the Task" />
                <input type="submit" />
            </form>
        )
    }
}

export default Addtodo;

