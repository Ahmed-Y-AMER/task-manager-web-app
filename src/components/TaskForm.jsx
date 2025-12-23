// TaskForm.jsx
import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const validateInput = (value) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return 'Please enter a task before adding.';
    }

    if (trimmed.length > 100) {
      return 'Task name is too long (max 100 characters).';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput(input);

    if (validationError) {
      setError(validationError);
      return;
    }

    const trimmedInput = input.trim();
    onAddTask(trimmedInput);
    setInput('');
    setError('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Clear error while user is fixing input
    if (error) {
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a new task..."
          className="task-input"
          aria-invalid={!!error}
          aria-describedby={error ? 'task-input-error' : undefined}
        />
        {error && (
          <span id="task-input-error" className="error-message">
            {error}
          </span>
        )}
      </div>
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TaskForm;

