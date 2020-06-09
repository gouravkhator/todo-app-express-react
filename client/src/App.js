import React, { Component } from 'react';
import AddTodo from "./components/AddTodo/AddTodo";
import ListItem from './components/ListItem/ListItem';
import Error from './components/Error/Error';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        const newItem = {
            id: Date.now(),
            value: "Temp",
            isChecked: false,
        };
        this.state = {
            list: [newItem],
            errorMsg: ''
        };
    }

    setError(msg) {
        this.setState({
            errorMsg: msg
        });
    }

    addItem(value) {
        value = value.trim();
        console.log(value);
        let flag = this.state.list.find((val) => val === value);
        console.log(flag);
        if (value !== "") {
            if (flag) {
                this.setError('Todo already exists');
            } else {
                this.setError('');
                const newItem = {
                    id: Date.now(),
                    value,
                    isChecked: false,
                };
                let list = [newItem, ...this.state.list];
                this.setState({
                    list
                });
            }
        } else {
            this.setError('Empty todos not allowed');
        }
    }

    deleteItem(id) {
        this.setError('');
        let list = this.state.list.filter(item => item.id !== id);
        this.setState({
            list
        });
    }

    updateChecked(id, checked) {
        this.setError('');
        let list = [...this.state.list];
        let index = list.findIndex((value) => {
            return value.id === id;
        });

        list[index].isChecked = !checked;
        this.setState({
            list
        });
    }

    render() {
        return (
            <div className="App" >
                <h2>My Todo</h2>
                {this.state.errorMsg !== '' ? <Error msg={this.state.errorMsg} /> : <p></p>}
                <AddTodo addItem={(value) => this.addItem(value)} />
                <ul className="todo-list">
                    {this.state.list.map(item => (
                        <ListItem key={item.id} item={item} deleteItem={() => this.deleteItem(item.id)}
                            updateChecked={() => this.updateChecked(item.id, item.isChecked)} />
                    ))}
                </ul>
            </div>
        );
    }
}
