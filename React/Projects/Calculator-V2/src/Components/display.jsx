import style from "./display.module.css";
const Display = ({displayValue}) => {
  return (
    <input className={style.display} type="text" value={displayValue} readOnly/>
  );
}
export default Display;