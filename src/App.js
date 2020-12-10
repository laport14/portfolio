import React from "react"
import {Route} from "react-router-dom"
import './App.css';
import Home from "./screens/Home/Home";
import AboutMe from "./screens/AboutMe/AboutMe"
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
