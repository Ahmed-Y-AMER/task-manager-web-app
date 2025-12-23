// TaskItem.jsx
function formatDate(isoString) {
  if (!isoString) return '';

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function TaskItem({ task, onToggle, onDelete }) {
  const createdLabel = task.createdAt ? `Added: ${formatDate(task.createdAt)}` : '';
  const completedLabel = task.completedAt
    ? `Completed: ${formatDate(task.completedAt)}`
    : '';

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span className={task.completed ? 'task-title completed' : 'task-title'}>
          {task.title}
        </span>
        <div className="task-meta">
          {createdLabel && <span className="task-date created-date">{createdLabel}</span>}
          {completedLabel && (
            <span className="task-date completed-date">{completedLabel}</span>
          )}
        </div>
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;

