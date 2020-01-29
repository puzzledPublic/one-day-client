import React from "react";
import { Switch, Route } from "react-router-dom";
import BasePage from "./pages/main/BasePage";
import { useInitAuth } from "./lib/hook/useInitAuth";

const App: React.FC = () => {
  useInitAuth();

  return (
    <Switch>
      <Route path="/" component={BasePage} />
    </Switch>
  );
};

export default App;
