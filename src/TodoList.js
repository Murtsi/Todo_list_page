import React, { useEffect, useState } from 'react';

function TodoList({ todos, removeTodo }) {
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
        }, 500); // Match the duration of the fade-out animation
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} className={`${fadeInClass[index]} ${fadeOutClass[index]}`}>
                    {todo}
                    <button onClick={() => handleRemove(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
