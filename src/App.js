import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <header>
                <h1>To-Do List</h1>
            </header>
            <div className="container">
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} />
            </div>
            <footer>
                <p>&copy; To do list app made by <a href="https://github.com/Murtsi" target="_blank" rel="noopener noreferrer">Murtsi</a></p>
            </footer>
        </div>
    );
}

export default App;
