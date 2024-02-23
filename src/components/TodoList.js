import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask } from '../actions';
import './todolist.css';

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className='ul'>
    <p>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
          <button className="button-4" role="button" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </p>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleTask })(TodoList);
