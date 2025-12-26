// App.jsx
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem('tasks');
      if (!stored) return [];

      const parsed = JSON.parse(stored);

      // Ensure older tasks (without dates) get sensible defaults
      if (!Array.isArray(parsed)) return [];

      return parsed.map((task) => {
        const hasCreatedAt = !!task.createdAt;
        const hasCompletedAt = !!task.completedAt;

        // Try to derive a creation date from id if it's numeric
        let derivedCreatedAt = null;
        if (!hasCreatedAt && typeof task.id === 'number') {
          const derivedDate = new Date(task.id);
          if (!Number.isNaN(derivedDate.getTime())) {
            derivedCreatedAt = derivedDate.toISOString();
          }
        }

        return {
          ...task,
          createdAt: hasCreatedAt ? task.createdAt : derivedCreatedAt,
          completedAt: task.completed && !hasCompletedAt ? null : task.completedAt ?? null,
        };
      });
    } catch (error) {
      console.error('Failed to parse tasks from localStorage', error);
      return [];
    }
  });
  const [filter, setFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Apply theme on mount and when it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);

  const addTask = (title) => {
    const now = new Date().toISOString();
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: now,
      completedAt: null,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: !task.completed ? new Date().toISOString() : null,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    // Show only active tasks in "All" and "Active" views
    if (filter === 'all' || filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return !task.completed;
  });

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="header-container">
        <h1>Task Manager</h1>
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <TaskForm onAddTask={addTask} />
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'filter-button active' : 'filter-button'}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'filter-button active' : 'filter-button'}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'filter-button active' : 'filter-button'}
        >
          Completed
        </button>
      </div>
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
