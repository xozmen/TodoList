
import React, { useState } from 'react';

export default function AddTodoForm({ onAddTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    if (typeof onAddTodo === 'function') onAddTodo(text);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add todo..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
