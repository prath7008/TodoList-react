import React, { useState } from 'react';
import { connect } from 'react-redux';
import './NewTodoForm.css'
import { createTodo } from './actions';
//connect()()
const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputvalue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo"
                value={inputvalue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputvalue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputvalue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div >
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
}),
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);