import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import FourOFour from "./Components/404/404.js";
import "./App.css";

const  App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={FourOFour} />
    </Switch>
  )
}

export default App;
