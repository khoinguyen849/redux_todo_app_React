import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <AddTodo />
      <div className="todos-section">
        <h3 className="todos-header">Todos ({todos.length})</h3>
        {todos.length === 0 ? (
          <p className="no-todos-message">
            No todos yet. Add one above!
          </p>
        ) : (
          <TodoList />
        )}
      </div>
    </div>
  );
}

export default App;
