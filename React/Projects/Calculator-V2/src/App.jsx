import style from "./App.module.css";
import Display from "./Components/display";
import BtnContainer from "./Components/BtnContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onBtnClick = (btnText) => {
    if (btnText === 'c') {
      setCalVal("");
    }
    else if(btnText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal +btnText;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <>
      <div className={style.calculator}>
        <Display displayValue = {calVal}></Display>
        <BtnContainer onBtnClick = {onBtnClick}></BtnContainer>
      </div>
    </>
  );
};
 
export default App
