import React from 'react';
import Todocomp from './Todocomp';
import PropTypes from 'prop-types';


export class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) =>
            <Todocomp key={todo.id} todo={todo} mark_complete = {this.props.markComplete} 
            del_todo = {this.props.delTodo}
            />
        );
    }

}

Todos.prototypes ={

    todos: PropTypes.array.isRequired
}

export default Todos;