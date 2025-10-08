import React from "react";
import { connect } from "react-redux";
//import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";
import { getVisibleTodos } from "../selectors/todoSelectors";
import "./TodoList.css";

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    
  

   
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    <span
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        className={`todo-text ${
                            todo.completed ? "completed" : "incomplete"
                        }`}
                    >
                        {todo.text}
                    </span>
                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="delete-button"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
   

   //Map Redux state
   const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
   })

   
};

//Map dispatch action to props
   const mapDispatchToProps = {toggleTodo, deleteTodo}

   export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
