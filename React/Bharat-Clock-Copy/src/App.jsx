import './App.css'
import Heading from './components/heading';
import Slogan from './components/slogan';
import CurrentTime from './components/currentTime';

import "bootstrap/dist/css/bootstrap.min.css"
// Function Name Should be in capital letters
function App() {
  return (
    <center>
      <Heading />
      <Slogan />
      <CurrentTime />
    </center>
  );
}

export default App;

