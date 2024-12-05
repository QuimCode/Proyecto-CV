import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim()) {
        setTodos([...todos, newTodo]);
        setNewTodo("");
        }
};

return (
    <div>
        <h2>Todo List</h2>
        <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
        <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
        </ul>
    </div>
    );
}

export default TodoList;
