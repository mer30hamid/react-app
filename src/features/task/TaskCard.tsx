import type { Task } from '../../types';
import { classNames } from '../../utils/classNames';
import { getRelativeTime, formatDate } from '../../utils/date';
import styles from './TaskCard.module.css';

type TaskCardProps = {
  task: Task;
  onDelete?: (id: string) => void;
  onStatusChange?: (id: string, status: Task['status']) => void;
  onEdit?: (id: string) => void;
  showActions?: boolean;
};

function TaskCard({
  task,
  onDelete,
  onStatusChange,
  onEdit,
  showActions = true,
}: TaskCardProps) {
  const cardClass = classNames(
    styles.card,
    task.status === 'done' && styles.cardCompleted
  );

  const priorityClass = classNames(
    styles.badge,
    styles.priorityBadge,
    task.priority === 'low' && styles.priorityLow,
    task.priority === 'medium' && styles.priorityMedium,
    task.priority === 'high' && styles.priorityHigh
  );

  const statusClass = classNames(
    styles.badge,
    styles.statusBadge,
    task.status === 'todo' && styles.statusTodo,
    task.status === 'in-progress' && styles.statusInProgress,
    task.status === 'done' && styles.statusDone
  );

  return (
    <div className={cardClass}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.title}</h3>
        <div className={styles.badges}>
          <span className={priorityClass}>{task.priority}</span>
          <span className={statusClass}>
            {task.status === 'in-progress'
              ? 'In Progress'
              : task.status.toUpperCase()}
          </span>
        </div>
      </div>

      {task.description && (
        <p className={styles.description}>{task.description}</p>
      )}

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <span className={styles.icon}>📅</span>
          Created {getRelativeTime(task.createdAt)}
        </span>
        {task.dueDate && (
          <span className={styles.metaItem}>
            <span className={styles.icon}>⏰</span>
            Due {formatDate(task.dueDate)}
          </span>
        )}
      </div>

      {showActions && (
        <div className={styles.actions}>
          {onStatusChange && (
            <select
              className={styles.statusSelect}
              value={task.status}
              onChange={(e) =>
                onStatusChange(task.id, e.target.value as Task['status'])
              }
              aria-label="Change task status"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          )}

          {onEdit && (
            <button
              className={`${styles.button} ${styles.editButton}`}
              onClick={() => onEdit(task.id)}
              aria-label="Edit task"
              title="Edit task"
            >
              ✏️
            </button>
          )}

          {onDelete && (
            <button
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={() => {
                if (confirm(`Delete "${task.title}"?`)) {
                  onDelete(task.id);
                }
              }}
              aria-label="Delete task"
              title="Delete task"
            >
              🗑️
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskCard;
