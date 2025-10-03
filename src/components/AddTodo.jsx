import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import "./AddTodo.css";

const AddTodo = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue.trim()));
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className="add-todo-input"
            />
            <button type="submit" className="add-todo-button">
                Add Todo
            </button>
        </form>
    );
};

export default AddTodo;
