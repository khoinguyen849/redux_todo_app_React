import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import { getTodoStats, getVisibleTodos } from './selectors/todoSelectors';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.visibilityFilter);
  const stats = getTodoStats(todos);
  const visibleTodos = getVisibleTodos(todos, filter);

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <AddTodo />
      
      {todos.length > 0 && (
        <div className="stats-section">
          <div className="stats-info">
            <span className="stat-item">Total: {stats.total}</span>
            <span className="stat-item">Active: {stats.active}</span>
            <span className="stat-item">Completed: {stats.completed}</span>
          </div>
        </div>
      )}
      
      <div className="todos-section">
        {todos.length === 0 ? (
          <p className="no-todos-message">
            No todos yet. Add one above!
          </p>
        ) : (
          <>
            <FilterButtons />
            <h3 className="todos-header">
              {filter === 'SHOW_ALL' && `All Todos (${visibleTodos.length})`}
              {filter === 'SHOW_ACTIVE' && `Active Todos (${visibleTodos.length})`}
              {filter === 'SHOW_COMPLETED' && `Completed Todos (${visibleTodos.length})`}
            </h3>
            {visibleTodos.length === 0 ? (
              <p className="no-todos-message">
                No todos match the current filter.
              </p>
            ) : (
              <TodoList />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
