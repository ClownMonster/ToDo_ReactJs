import React, { Component } from 'react'

export class Addtodo extends Component {

    inputStyle =  () =>{
        return{
            ''
        }
    }


    render() {
        return (
            <form>
                <input type="text" style={inputStyle()} placeholder="Enter the Task" />
                <input type="submit" />
            </form>
        )
    }
}

export default Addtodo;

