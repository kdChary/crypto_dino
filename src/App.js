import { Route, Switch } from "react-router-dom";
import { Component } from "react";

import "./App.css";
import AppContext from "./context";
import Home from "./components/HomePage";
import EmptyPage from "./components/EmptyPage";
import Profile from "./components/Profile";
import Assets from "./components/Assets";

class App extends Component {
  state = { activeTab: "HOME" };
  changeTab = (val) => {
    this.setState({ activeTab: val });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <AppContext.Provider value={{ activeTab, changeTab: this.changeTab }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={EmptyPage} />
          <Route exact path="/notifications" component={EmptyPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/assets" component={Assets} />
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default App;
