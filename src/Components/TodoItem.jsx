import React from 'react';

const TodoItem = ({ todo = {} }) => {
  return (
    <li>
      <input type="checkbox" checked={!!todo.completed} readOnly />
      {todo.text || 'No Task'}
    </li>
  );
};

export default TodoItem;
