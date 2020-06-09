import React from 'react';
import ActionButtons from '../ActionBtns/ActionBtns';
import './ListItem.css';

export default function ListItem({ item, deleteItem, updateChecked }) {
    return (
        <>
            <li className="todo-item" key={item.id}>
                <input type="checkbox" value={item.value}
                    onChange={(e) => updateChecked()}
                    checked={item.isChecked} />
                <p className={item.isChecked ? "checked" : ""}>{item.value}</p>
                <ActionButtons item={item} deleteItem={() => deleteItem()} />
            </li>
        </>
    );
}
