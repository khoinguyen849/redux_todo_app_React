import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/todoActions';

// Selector to get filtered todos
export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

// Selector to get todo statistics
export const getTodoStats = (todos) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  
  return {
    total,
    completed,
    active
  };
};