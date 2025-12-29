import AppLayout from './layouts/AppLayout';
import TasksFeature from './features/task/TasksFeature.tsx';

function App() {
  return (
    <AppLayout>
      <TasksFeature />
    </AppLayout>
  );
}

export default App;
