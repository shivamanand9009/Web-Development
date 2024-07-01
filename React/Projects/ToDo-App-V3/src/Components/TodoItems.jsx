import React from 'react';
import TodoItem from './TodoItem';
import style from './TodoItems.module.css';

const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div className={style.itemContainers}>
      {TodoItems.map(item => (
        <TodoItem
          key={item.name}  // Unique key
          TodoDate={item.date}
          TodoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
