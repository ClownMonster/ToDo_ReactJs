import React from 'react';
import Todos from './components/Todos'


import './App.css';

class App extends React.Component {
  
  state = {
    todos:[
      {
        id:1,
        title:'Github load',
        completed:false
      },
      {
        id:2,
        title:'Hacker Rank solve',
        completed:true
      },
      {
        id:3,
        title:'Github Push',
        completed:false
      }
    ]
  };


  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed  = !todo.completed;
      }
      return todo;

    })});
    
  }

  delTodo = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }




  render(){

    return(
      <div className="App">
        < Todos  todos={ this.state.todos } markComplete = {this.markComplete} 
        delTodo = {this.delTodo}
        />
      </div>
    );
  }
}

export default App;
