import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), text, completed: false }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
