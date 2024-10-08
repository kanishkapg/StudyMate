import React, { useState } from "react";
import SidePanel from "../components/SidePanel";

import { Link } from "react-router-dom";

// TaskCard component for each task
const TaskCard = ({ task, index, handleDelete, handleComplete }) => {
  return (
    <div className="bg-gray-200 px-4 py-2 mb-2 rounded-[15px] shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[25px] font-semibold">{task.description}</div>
        <div className="px-2 py-1 flex items-center justify-between w-auto bg-blue-700 rounded-full
        space-x-2">
          <p className="font-semibold text-[12px] text-white">Mark as Completed</p>
          <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleComplete(index)}
          className="w-4 h-4"
        />
      </div>
        
      </div>
      <div className="space-y-2">
        <div className="flex">
          <p className="w-32"><strong>List:</strong></p>
          <p className="flex-1 text-left ml-6">{task.list}</p>
        </div>
        
        <div className="flex">
          <p className="w-32"><strong>Due Date:</strong></p>
          <p className="flex-1 text-left ml-6">{task.dueDate}</p>
        </div>
        
        <div className="flex">
          <p className="w-32"><strong>Priority Level:</strong></p>
          <p className="flex-1 text-left ml-6">{task.priority}</p>
        </div>
        
        <div className="flex">
          <p className="w-32"><strong>Sub-tasks:</strong></p>
          <p className="flex-1 text-left ml-6">{task.subTasks}</p>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
        stroke="currentColor" className="size-6 cursor-pointer" onClick={() => handleDelete(index)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </div>

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
        <div className="w-full">
          <h2 className="text-lg font-semibold mt-2 ml-4">Tasks</h2>
          <div className="w-full py-2 flex hover:bg-blue-500/80 hover:text-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="size-6 ml-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            <p className="font-semibold text-gray-600 ">Upcoming</p>
            <p className="ml-auto mr-4 font-semibold">10</p>
          </div>
          <div className="w-full py-2 flex hover:bg-blue-500/80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="size-6 ml-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <p className="font-semibold text-gray-600">Today</p>
            <p className="ml-auto mr-4 font-semibold">2</p>
          </div>
          <div className="w-full py-2 flex space-x-2 hover:bg-blue-500/80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="size-6 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p className="font-semibold text-gray-600">Calender</p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-lg font-semibold mt-2 ml-4">Lists</h2>
          <div className="w-full py-2 flex items-center hover:bg-blue-500/80 ">
            <div className="w-5 h-5 mr-2 bg-pink-600 ml-4 rounded"></div>
            <p className="font-semibold text-gray-600 hover:text-blue-950">Personal</p>
            <p className="ml-auto mr-4 font-semibold">8</p>
          </div>
          <div className="w-full py-2 flex items-center hover:bg-blue-500/80">
            <div className="w-5 h-5 mr-2 bg-yellow-500 ml-4 rounded"></div>
            <p className="font-semibold text-gray-600">Work</p>
            <p className="ml-auto mr-4 font-semibold">4</p>
          </div>
          <div className="w-full py-2 flex space-x-2 hover:bg-blue-500/80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="size-6 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="font-semibold text-gray-600">Add New List</p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full py-2 flex space-x-2 hover:bg-blue-500/80 hover:text-blue-950">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="size-6 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            <p className="font-semibold text-gray-600 ">Important Tasks</p>
          </div>
          <div className="w-full py-2 flex space-x-2 hover:bg-blue-500/80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" className="size-6 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
            <p className="font-semibold text-gray-600">Completed Tasks</p>
          </div>
        </div>
      </div>

      {/* 3rd Column: Task Cards (Scrollable) */}
      <div className="w-[500px] bg-gray-50 p-4 overflow-y-auto">
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
      <div className="w-[350px] bg-white p-4 flex flex-col border-2 border-blue-950/80
      mr-[20px] rounded-[15px]">
      
        <div className="flex items-center px-3 w-full p-2 border-[1.5px] border-black/50 bg-gray-200 rounded-md 
          text-lg font-semibold ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
          className="size-5 mr-3 text-gray-500">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
          <h2 className="text-gray-500">
            Set Your Tasks
          </h2>
        </div>
          
        <div>
          <h2 className="mt-3 mb-2 font-bold">Description</h2>
          <textarea
            className="w-full h-24 p-2 border bg-gray-200 border-gray-300 rounded focus:outline-none 
            focus:ring-2 focus:ring-gray-500"
            placeholder="+ Add a Description about the Task"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </div>

        <div className="w-full mt-4 ">
          <div className="flex items-center mb-3">
            <div className="w-1/2 items-center">
              <p className="block font-bold mb-2">List</p>
            </div>
            <div className="w-1/2 flex items-center">
              <select 
              className="w-auto px-3 py-1 border bg-gray-200 border-gray-300 rounded-md focus:outline-none 
              focus:ring-2 focus:ring-blue-500"
              value={newTask.list}
              onChange={(e) => setNewTask({ ...newTask, list: e.target.value })}>
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
                className="block w-full p-2 border bg-gray-200 border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-400"
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
                className="block w-full p-2 border bg-gray-200 border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={newTask.subTask}
                onChange={(e) => setNewTask({ ...newTask, subTasks: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center mb-3">
            <div className="w-1/2">
              <p className="block font-bold mb-2">Prioritized Level</p>
            </div>
            <div className="w-1/2 flex items-center">
              <select 
                className="block w-full p-2 border bg-gray-200 border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

        {/* Add Task Button */}
        <button
          className=" w-[40%] mx-auto px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 mt-4 justify-end"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

    </div>
  );
};

export default ToDoListPage;
