import React from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import Addtodo from './components/Addtodo'
import {v4 as uuid} from 'uuid'


import './App.css';

class App extends React.Component {
  
  state = {
    todos:[
      {
        id:uuid(),
        title:'Github',
        completed:false
      },
      {
        id:uuid(),
        title:'Hacker Rank solve',
        completed:false
      },
      {
        id:uuid(),
        title:'Excercise',
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


  //adding the task

  addTodo =  (title) =>{
    
    const newTodo = {
      id : uuid(),
      title, // same as title:title
      completed: false

    }

    this.setState({todos: [...this.state.todos, newTodo]  })

  }



  render(){

    return(
      <div className="App">
        < Header />
        <br/>
        < Addtodo  addTodo = {this.addTodo}/>
        <br/>
        < Todos  todos={ this.state.todos } markComplete = {this.markComplete} 
        delTodo = {this.delTodo}
        />
      </div>
    );
  }
}

export default App;
