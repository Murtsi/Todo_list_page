import React, { useEffect, useState } from 'react';

function TodoList({ todos, removeTodo, toggleComplete }) {
    const [fadeInClass, setFadeInClass] = useState([]);
    const [fadeOutClass, setFadeOutClass] = useState([]);

    useEffect(() => {
        setFadeInClass(todos.map(() => 'fade-in'));
        setFadeOutClass(todos.map(() => ''));
    }, [todos]);

    const handleRemove = (index) => {
        const newFadeOutClass = [...fadeOutClass];
        newFadeOutClass[index] = 'fade-out';
        setFadeOutClass(newFadeOutClass);

        setTimeout(() => {
            removeTodo(index);
        }, 1500); // Match the duration of the fade-out animation
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} className={`${fadeInClass[index]} ${fadeOutClass[index]}`}>
                    <div>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        <strong style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </strong>
                        <div>Category: {todo.category}</div>
                        <div>Due: {todo.dueDate}</div>
                    </div>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
