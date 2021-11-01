import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/layouts/NavBar";
import Dashboard from "./components/layouts/Dashboard";

class App extends Component {
render() {
  return (
    <div className="App">
      <NavBar /><div className="container"><Dashboard></Dashboard></div>
      
      </div>
  );
  }
}

export default App;
