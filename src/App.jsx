import { useState } from "react";
import { TaskManager } from './components/TaskManager';
import Button from './components/ui/Button';


export default function App() {
  const [showTaskManager, setShowTaskManager] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <Button onClick={() => setShowTaskManager(!showTaskManager)}>
        {showTaskManager ? "Hide Task Manager" : "Show Task Manager"}
      </Button>
      {showTaskManager && <TaskManager />}
    </div>
  );
}