export default function Tasks() {
  const tasks = {
    todo: ["Build Navbar", "Fix Login Form"],
    inProgress: ["Dashboard Stats", "Team Section"],
    done: ["Landing Page"],
  };

  const renderTasks = (taskList) =>
    taskList.map((t, i) => (
      <div key={i} className="bg-white p-3 rounded shadow mb-2">
        {t}
      </div>
    ));

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Task Board</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">To Do</h2>
          {renderTasks(tasks.todo)}
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">In Progress</h2>
          {renderTasks(tasks.inProgress)}
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Done</h2>
          {renderTasks(tasks.done)}
        </div>
      </div>
    </div>
  );
}
