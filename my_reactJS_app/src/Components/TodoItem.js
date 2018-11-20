import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {

    deleteTodos(id){
        //console.log('test');
        this.props.onDelete(id);
    }
    render() {
        
        return (
        <li className="Todos">
            <strong>{this.props.todo.userId}</strong> :
            <strong>{this.props.todo.title}</strong> - {this.props.todo.completed.toString()} ---- {this.props.todo.id}
            <a href="#" onClick={this.deleteTodos.bind(this, this.props.todo.id)}>X</a>
        </li>
        );
    }
}


TodoItems.propTypes = {
    todo: PropTypes.object,
    onDelete: PropTypes.func
}

export default TodoItems;