import "./App.css";
import "./styles/navbar.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ModalComments from './components/ModalComments'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch location={{pathname: '/'}}>
        <Route exact path="/" component={Home} />
      </Switch>
        <Route exact path="/com/:id" component={ModalComments} />
    </Router>
  );
}

export default App;
