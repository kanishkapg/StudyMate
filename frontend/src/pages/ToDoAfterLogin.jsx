import React, { useState } from 'react';

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput(''); // Clear the input field after adding
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navigation Panel (First Column) */}
      <div className="w-[60px] bg-teal-700 flex flex-col justify-start items-center py-4">
        <div className="space-y-6">
          <button className="text-white">Nav1</button>
          <button className="text-white">Nav2</button>
          <button className="text-white">Nav3</button>
        </div>
      </div>

      {/* Task Tracker (Second Column) */}
      <div className="w-[200px] bg-white p-4">
        <h2 className="font-bold text-lg mb-4">Task Tracker</h2>
        <div className="space-y-4">
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed Tasks: 0</p>
        </div>
      </div>

      {/* Task Cards (Third Column - Scrollable) */}
      <div className="w-[350px] bg-white p-4 overflow-y-auto">
        <h2 className="font-bold text-lg mb-4">Your Tasks</h2>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="bg-teal-200 p-4 rounded-md flex justify-between items-center"
              >
                <p>{task}</p>
                <button
                  className="text-red-500 font-bold"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Task Form (Fourth Column) */}
      <div className="w-[300px] bg-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-lg mb-4">Add a New Task</h2>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoListPage;
