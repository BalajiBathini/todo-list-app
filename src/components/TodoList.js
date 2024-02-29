// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleToDoDelete, handleComplete,handleCompletedTodoDelete }) {
  return (
    <div className="todo-list">
      {todos.map((item, index) => (
        <TodoItem
          item={item}
          index={index}
          key={index}
          handleToDoDelete={handleToDoDelete}
          handleComplete={handleComplete}
          handleCompletedTodoDelete={handleCompletedTodoDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
