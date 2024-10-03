import React, { useState } from "react";
import SidePanel from "../components/SidePanel";

// TaskCard component for each task
const TaskCard = ({ task, index, handleDelete, handleComplete }) => {
  return (
    <div className="bg-white p-4 mb-2 rounded shadow">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">{task.description}</div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleComplete(index)}
          className="w-5 h-5"
        />
      </div>
      <p className="mt-2">
        <strong>List:</strong> {task.list}
      </p>
      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>
      <p>
        <strong>Priority Level:</strong> {task.priority}
      </p>
      <p>
        <strong>Sub-tasks:</strong> {task.subTasks}
      </p>
      <button
        className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => handleDelete(index)}
      >
        Delete
      </button>
    </div>
  );
};

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    description: "",
    list: "Personal",
    dueDate: "",
    subTasks: "",
    priority: "low",
    completed: false,
  });
  
  const [listOptions, setListOptions] = useState(['Personal', 'Work', 'Study']);
  const [newOption, setNewOption] = useState('');

  // Handle task addition
  const addTask = () => {
    if (newTask.description.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({
        description: "",
        list: "Personal",
        dueDate: "",
        subTasks: "",
        priority: "low",
        completed: false,
      }); // Clear form after adding the task
    }
  };

  // Handle task deletion
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle task completion
  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handle adding new list option
  const handleAddOption = () => {
    if (newOption && !listOptions.includes(newOption)) {
      setListOptions([...listOptions, newOption]);
      setNewOption('');
    }
  };

  return (
    <div className="flex h-[83.333vh] justify-between">
      {/* 1st Column: Navigation Panel */}
      <SidePanel/>

      {/* 2nd Column: Task Tracker */}
      <div className="w-[250px] bg-blue-200 rounded-[15px] flex flex-col space-y-3">
        {/* Task List */}
        <div className="w-full">
          <h2 className="text-lg font-semibold mt-2 ml-4">Tasks</h2>
          {/* Additional UI code for lists like upcoming, today, etc */}
        </div>

        <div className="w-full">
          <h2 className="text-lg font-semibold mt-2 ml-4">Lists</h2>
          {/* UI code for different lists like Personal, Work, etc */}
        </div>
      </div>

      {/* 3rd Column: Task Cards (Scrollable) */}
      <div className="w-[350px] bg-gray-50 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p>No tasks available. Add some tasks to see them here!</p>
          ) : (
            tasks.map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                index={index}
                handleDelete={deleteTask}
                handleComplete={completeTask}
              />
            ))
          )}
        </div>
      </div>

      {/* 4th Column: Form to Set Tasks */}
      <div className="w-[350px] bg-white p-4 flex flex-col border-2 border-blue-950/80 mr-[20px] rounded-[15px]">
        <div className="flex items-center px-3 w-full p-2 border-[1.5px] border-black/50 bg-gray-200 rounded-md text-lg font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 mr-3 text-gray-500">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          <h2 className="text-gray-500">Set Your Tasks</h2>
        </div>
          
        <div>
          <h2 className="mt-3 mb-2 font-bold">Description</h2>
          <textarea
            className="w-full h-24 p-2 border bg-gray-200 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="+ Add a Description about the Task"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </div>

        <div className="w-full mt-4">
          <div className="flex items-center mb-3">
            <div className="w-1/2 items-center">
              <p className="block font-bold mb-2">List</p>
            </div>
            <div className="w-1/2 flex items-center">
              <select
                className="w-auto px-3 py-1 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newTask.list}
                onChange={(e) => setNewTask({ ...newTask, list: e.target.value })}
              >
                {listOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center mb-3">
            <div className="w-1/2 flex items-center">
              <p className="block font-bold mb-2">Due Date</p>
            </div>
            <div className="w-1/2 flex items-center">
              <input
                type="date"
                className="block w-full p-2 border bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-400"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
            </div> 
          </div>

          <div className="flex items-center mb-3">
            <div className="w-1/2 flex items-center">
              <p className="block font-bold mb-2">Sub Tasks</p>
            </div>
            <div className="w-1/2 flex items-center">
              <input
                type="text"
                placeholder="+ Add a subtask"
                className="block w-full p-2 border bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={newTask.subTasks}
                onChange={(e) => setNewTask({ ...newTask, subTasks: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center mb-3">
            <div className="w-1/2">
              <p className="block font-bold mb-2">Prioritized Level</p>
            </div>
            <div className="w-1/2 flex items-center">
              <select
                className="w-auto px-3 py-1 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <button
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoListPage;
