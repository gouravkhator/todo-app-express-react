import React, { useState } from 'react';
import './AddTodo.css';

function AddTodoInput({ addItem }) {
    const [newItem, setNewItem] = useState('');
    return (
        <div className="add-input-area">
            <textarea className="input-field" type="text" placeholder="Enter a Todo" required value={newItem}
                onChange={(e) => setNewItem(e.target.value)} />
            <button className="btn" onClick={() => addItem(newItem)}>Add Todo</button>
        </div>
    );
}

export default AddTodoInput;