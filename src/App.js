import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  
  const handleAddTask = () => {
    
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); 
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Введите новую задачу"
        />
        <button onClick={handleAddTask}>Добавить</button>
      </div>
    </div>
  );
};