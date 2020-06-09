import React from 'react';
import { useDispatch } from 'react-redux';
import ListItem from './ListItem/ListItem';
import './List.css';

export default function List({ todos }) {
    const dispatch = useDispatch();
    return (
        <ul className="todo-list">
            {todos.map(item => (
                <ListItem key={item.id} item={item} deleteItem={() => dispatch({ type: 'DEL_TODO', id: item.id })}
                    updateChecked={() => dispatch({ type: 'EDIT_CHECKED', id: item.id, checked: item.isChecked })} />
            ))}
        </ul>
    );
}
