import React from 'react';
import TodoListItem from './TodoListitem';
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
const TodoList = ({ todos = [{ text: 'Hello' }, { text: 'Hello' }] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;