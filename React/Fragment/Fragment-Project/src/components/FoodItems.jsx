function FoodItem() {
  let foodItem = ["Item1","Item2","Item3","Item4","Item5" ];
  return (

    <ul className="list-group">
      {foodItem.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
export default FoodItem;
