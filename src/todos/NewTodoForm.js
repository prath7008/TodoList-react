import React, { useState } from 'react';
import './NewTodoForm.css'
const NewTodoForm = () => {
    const [inputvalue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo"
                value={inputvalue}
                onChange={e => setInputValue(e.target.value)} />
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
};

export default NewTodoForm;