import "../src/styles/App.css";
import "./styles/navbar.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ModalComments from "./components/ModalComments";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch location={{ pathname: "/" }}> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:topic" component={Home} />
      </Switch>
      <Route exact path="/comments/:id" component={ModalComments} />
    </Router>
  );
}

export default App;
