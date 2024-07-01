function TodoItem({TodoName, TodoDate}) {
  // let TodoName = "Buy Milk";
  // let TodoDate = "12-06-2024";
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
          <button type="button" className="btn btn-danger my-btn">Delete</button>
          </div>
        </div>
      </div>
  );
}
export default TodoItem;