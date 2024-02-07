// TaskList.js
import React, { useState } from 'react';
import '../styling/TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  function toggleTask(taskId) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="taskListContainer">
      <h2>ToDo-List</h2>
      <input
        type="text"
        placeholder="Neue Aufgabe hinzufügen"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="taskInput"
      />
      <button onClick={addTask} className="addTaskButton">Hinzufügen</button>

      <ul className="taskList">
        {tasks.map(task => (
          <li key={task.id} className="taskItem">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="taskCheckbox"
            />
            <span className="taskText" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)} className="deleteButton">Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;