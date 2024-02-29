// TodoInput.js
import React from 'react';

function TodoInput({ newTodoTitle, newDescription, setNewTodoTitle, setNewDescription, handleAddNewToDo }) {
  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title:</label>
        <input
          type="text"
          value={newTodoTitle}
          onChange={e => setNewTodoTitle(e.target.value)}
          placeholder="Add Your Task Here..."
        />
      </div>
      <div className="todo-input-item">
        <label>Description:</label>
        <input
          type="text"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          placeholder=" Description..!"
        />
      </div>
      <div className="todo-input-item">
        <button
          className="primary-btn"
          type="button"
          onClick={handleAddNewToDo}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
