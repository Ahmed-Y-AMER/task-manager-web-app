// TaskItem.jsx
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <span className={task.completed ? 'task-title completed' : 'task-title'}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;

