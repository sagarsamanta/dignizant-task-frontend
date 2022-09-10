import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
