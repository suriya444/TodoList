// App.js
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState(''); // For user input
  const [tasks, setTasks] = useState([]); // Store all tasks

  const addTask = () => {
    if (task.trim()) {  // Prevent empty tasks
      setTasks([...tasks, { text: task, isCompleted: false }]);
      setTask(''); // Clear input field after adding
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div>
        <input
          style={styles.input}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button style={styles.button} onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.text}
            <button style={styles.toggleButton} onClick={() => toggleTask(index)}>
              {task.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button style={styles.deleteButton} onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    width: '200px',
    marginRight: '10px',
  },
  button: {
    padding: '10px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    marginTop: '20px',
  },
  toggleButton: {
    marginLeft: '10px',
    padding: '5px 10px',
  },
  deleteButton: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default App;
