// App.jsx
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
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
