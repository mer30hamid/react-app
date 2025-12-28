import { useState } from 'react';
import styles from './TaskForm.module.css';
import type { Task } from '../../types';

type TaskFormProps = {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
  initialValues?: Partial<Task>;
};

function TaskForm({ onSubmit, onCancel, initialValues }: TaskFormProps) {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [status, setStatus] = useState<Task['status']>(initialValues?.status || 'todo');
  const [priority, setPriority] = useState<Task['priority']>(initialValues?.priority || 'medium');
  const [dueDate, setDueDate] = useState(
    initialValues?.dueDate ? initialValues.dueDate.toISOString().split('T')[0] : ''
  );
  const [errors, setErrors] = useState<{ title?: string }>({});

  const validate = () => {
    const newErrors: { title?: string } = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      status,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="title">
          Title <span className={styles.required}>*</span>
        </label>
        <input
          id="title"
          type="text"
          className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          autoFocus
        />
        {errors.title && <span className={styles.error}>{errors.title}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className={styles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows={4}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="status">
            Status
          </label>
          <select
            id="status"
            className={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value as Task['status'])}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            className={styles.select}
            value={priority}
            onChange={(e) => setPriority(e.target.value as Task['priority'])}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="dueDate">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          className={styles.input}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          {initialValues ? 'Update Task' : 'Create Task'}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
