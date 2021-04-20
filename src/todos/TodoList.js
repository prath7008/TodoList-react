import React from 'react';
import TodoListItem from './TodoListitem';
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { connect } from 'react-redux';
import { removeTodo } from './actions'
const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>
);
const mapStatetoProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);