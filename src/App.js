import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import FourOFour from "./Components/404/404.js";
import "./App.css";

const  App = () => {
  return (
    <Switch>
      {/* <Route path="/" component={FourOFour} /> */}
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default App;
