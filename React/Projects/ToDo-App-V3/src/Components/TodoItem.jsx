import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">
          {TodoName}
        </div>
        <div className="col-4">
          {TodoDate}
        </div>
        <div className="col-2">
          <button 
            type="button" 
            className="btn btn-danger my-btn" 
            onClick={() => onDeleteClick(TodoName)}
          >
          <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
