import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo({
            text: value,
            category,
            dueDate,
            completed: false, // Default to not completed
        });
        setValue('');
        setCategory('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new task"
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
