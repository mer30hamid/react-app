import { useState } from 'react';
import Modal from '../../components/Modal';
import StyledButton from '../../components/StyledButton';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import type { Task } from '../../types';

function TasksFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks((prev) => [newTask, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <StyledButton onClick={() => setIsModalOpen(true)}>+ New Task</StyledButton>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Task"
      >
        <TaskForm
          onSubmit={handleAddTask}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default TasksFeature;
