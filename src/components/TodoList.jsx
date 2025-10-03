import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";
import "./TodoList.css";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
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
    );
};

export default TodoList;
