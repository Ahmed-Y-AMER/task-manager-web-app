// TaskForm.jsx
import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      onAddTask(trimmedInput);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TaskForm;

