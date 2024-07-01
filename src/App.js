import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
    const [todos, setTodos] = useState([]);

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    // Save tasks to local storage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div>
            <header>
                <h1>To-Do List</h1>
            </header>
            <div className="container">
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
            </div>
            <footer>
                <p>&copy; To do list app made by <a href="https://github.com/Murtsi" target="_blank" rel="noopener noreferrer">Murtsi</a></p>
            </footer>
        </div>
    );
}

export default App;
