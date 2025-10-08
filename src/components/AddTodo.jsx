
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";
import "./AddTodo.css";


const AddTodo = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
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



export default connect(null, {addTodo})(AddTodo);
