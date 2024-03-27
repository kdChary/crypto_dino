import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage";
import EmptyPage from "./components/EmptyPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/history" component={EmptyPage} />
    <Route exact path="/notifications" component={EmptyPage} />
  </Switch>
);

export default App;
