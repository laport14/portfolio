import React from "react"
import {Route} from "react-router-dom"
import './App.css';
import Home from "./screens/Home/Home";
import AboutMe from "./screens/AboutMe/AboutMe"
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import Greenhouse from "./screens/GreenHouse/Greenhouse";
import Bucketlist from "./screens/Bucketlist/Bucketlist";
import Fittech from "./screens/Fittech/Fittech";
import Bartender from "./screens/Bartender/Bartender";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/greenhouse' component={Greenhouse} />
      <Route exact path='/bucketlist' component={Bucketlist} />
      <Route exact path='/fittech' component={Fittech} />
      <Route exact path='/bartender' component={Bartender} />
    </div>
  );
}

export default App;
