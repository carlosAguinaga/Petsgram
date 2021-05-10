import "./App.css";
import Posts from "./components/Posts";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Posts />
      </div>
    </div>
  );
}

export default App;
