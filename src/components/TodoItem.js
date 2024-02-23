import React from 'react';

const TodoItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
