import React from 'react';
import './ActionBtns.css';

export default function ActionBtns({ item, deleteItem }) {
    return (
        <div className="action-btns">
            <button className="btn delete-btn" onClick={() => deleteItem()}>Delete</button>
        </div>
    );
}
