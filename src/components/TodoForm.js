import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import './todoform.css';

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className="button-85" role="button" type="submit">Add Task</button>
    </form>
    </div>
  );
};

export default connect(null, { addTask })(TodoForm);
