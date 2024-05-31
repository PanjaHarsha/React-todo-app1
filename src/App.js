import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskInput />
      <TaskList onEdit={setEditingTask} />
      {editingTask && <EditTaskModal task={editingTask} onClose={() => setEditingTask(null)} />}
    </div>
  );
};

export default App;
