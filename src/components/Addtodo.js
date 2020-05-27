import React, { Component } from 'react'

export class Addtodo extends Component {

   formStyle = ()=>{
       return{
           'width':'60%',
           'height':'3rem',
           'marginBottom':'5rem',
           'paddingLeft':'2rem',

       }
   }


    render() {
        return (
            <form style={this.formStyle()}>
            <div class="form-group">
             <input  type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter The Task.."/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Addtodo;

