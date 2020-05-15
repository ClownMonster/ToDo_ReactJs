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

  render(){

    return(
      <div className="App">
        < Todos  todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
