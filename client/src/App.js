import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from "./components/AddTodo/AddTodo";
import List from './components/List/List';
import Error from './components/Error/Error';
import './App.css';

export default function App() {
    const todos = useSelector(state => state.todos);
    const errorMsg = useSelector(state => state.errorMsg);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h2>My Todo</h2>
            {errorMsg !== '' ? <Error msg={errorMsg} /> : <p></p>}
            <AddTodo addItem={(value) => dispatch({ type: 'ADD_TODO', value })} />
            <List todos={todos} />
        </div>
    );
}