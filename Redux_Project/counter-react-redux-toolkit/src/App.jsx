import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DispalyCounter";
import Container from "./components/container";
import Control from "./components/control";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {

  const privacy = useSelector(store => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage/> : <DisplayCounter/>}
          <Control></Control>
        </div>
      </Container>
    </center>
  );
}

export default App;
