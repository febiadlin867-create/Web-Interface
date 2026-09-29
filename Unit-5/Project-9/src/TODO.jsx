import React, { useState, createContext, useContext } from "react";
import "./TODO.css";

// Context
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <TodoContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoApp() {
  const { darkMode, toggleTheme } = useContext(TodoContext);

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Complete Task
  const completeTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={darkMode ? "todo-app dark" : "todo-app"}>

      <div className="todo-container">

        {/* Header */}
        <div className="todo-header">
          <div>
            <h1>My To-Do List</h1>
            <p>Manage your daily tasks easily</p>
          </div>

          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Input */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button onClick={addTask}>
            + Add Task
          </button>
        </div>

        {/* Task Count */}
        <div className="task-count">
          Total Tasks: <strong>{todos.length}</strong>
        </div>

        {/* Task List */}
        <div className="task-list">

          {todos.length === 0 ? (
            <div className="empty-message">
              <div className="empty-icon">📝</div>
              <h3>No tasks yet</h3>
              <p>Add your first task above!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                className={
                  todo.completed
                    ? "task-item completed"
                    : "task-item"
                }
                key={todo.id}
              >

                <div className="task-content">

                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => completeTask(todo.id)}
                  />

                  <span>{todo.text}</span>

                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(todo.id)}
                >
                  🗑️
                </button>

              </div>
            ))
          )}

        </div>

        {/* Footer */}
        <div className="todo-footer">
          <p>
            Completed:{" "}
            <strong>
              {todos.filter((todo) => todo.completed).length}
            </strong>
          </p>

          <p>
            Pending:{" "}
            <strong>
              {todos.filter((todo) => !todo.completed).length}
            </strong>
          </p>
        </div>

      </div>

    </div>
  );
}

function TODO() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default TODO;