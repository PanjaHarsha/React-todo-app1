import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasksSlice';

const Task = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => dispatch(toggleTask(task.id))} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
