function TodoItem2() {
  let TodoName = "Go To College";
  let TodoDate = "12-06-2024";
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2; 
