import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
const TodoItems = ({ TodoItems }) => {
  return (
    <>
      <div className={style.itemContainers}>
        {TodoItems.map(item => <TodoItem TodoDate = {item.date} TodoName= {item.name}></TodoItem> ) }

        <TodoItem TodoDate="12/06/2024" TodoName="Go To College"></TodoItem>
      </div>
    </>
  );
};
export default TodoItems;
