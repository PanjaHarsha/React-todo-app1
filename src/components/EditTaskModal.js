import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasksSlice';

const EditTaskModal = ({ task, onClose }) => {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, text }));
    onClose();
  };

  useEffect(() => {
    setText(task.text);
  }, [task]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
