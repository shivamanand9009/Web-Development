import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "12/06/2024",
    },
    {
      name: "Go To College",
      date: "12/06/2024",
    },
    {
      name: "Go and Eat",
      date: "14/6/2024",
    },
    {
      name: "Go and Take Bath",
      date: "Now",
    },
    {
      name: "Go and do ToothBrush",
      date: "Now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems TodoItems = {todoItems}></TodoItems>
    </center>
  );
}

export default App;
