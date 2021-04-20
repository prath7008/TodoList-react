import React from 'react';
import TodoListItem from './TodoListitem';
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from './actions'
const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
        />)}
    </div>
);
const mapStatetoProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);