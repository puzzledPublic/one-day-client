import React from "react";
import { Switch, Route } from "react-router-dom";
import BasePage from "./pages/main/BasePage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={BasePage}/>
    </Switch>
  );
};

export default App;
