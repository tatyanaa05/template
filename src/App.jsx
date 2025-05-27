import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
