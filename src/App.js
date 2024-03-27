import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
