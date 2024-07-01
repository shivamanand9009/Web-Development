import style from "./App.module.css";
import Display from "./Components/display";
import BtnContainer from "./Components/BtnContainer";
function App() {

  return (
    <>
      <div className={style.calculator}>
        <Display></Display>
        <BtnContainer></BtnContainer>
      </div>
    </>
  );
};
 
export default App
