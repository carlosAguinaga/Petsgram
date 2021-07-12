import "../src/styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./router/Root";

function App() {
  return (
    <Router>
      <Root />
    </Router>
  );
}

export default App;
