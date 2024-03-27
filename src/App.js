import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage";
import Header from "./components/Header";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/head" component={Header} />
  </Switch>
);

export default App;
