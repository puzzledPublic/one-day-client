import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage}/>
    </Switch>
  );
};

export default App;
