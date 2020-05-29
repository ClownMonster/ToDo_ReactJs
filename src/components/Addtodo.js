import React, { Component } from 'react'

export class Addtodo extends Component {

    state = {
        title: ''
    }


   formStyle = ()=>{
       return{
           'width':'60%',
           'height':'3rem',
           'marginBottom':'5rem',
           'paddingLeft':'2rem',

       }
   }

   onchange = (e) => this.setState({ [e.target.name] : e.target.value});

   onSubmit = (e) => {
       e.preventDefault();
       this.props.addTodo(this.state.title)
       this.setState({title:''})
   }


 
    render() {
        return (
            <form onSubmit = {this.onSubmit} style={this.formStyle()}>
            <div className="form-group">
             <input 
             autoComplete="off" 
             type="text" 
             name = "title"
             value = {this.state.title}
             onChange = {this.onchange}
             className="form-control" id="exampleInputEmail1"  
             placeholder="Enter The Task"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Addtodo;

