import { Route, Switch } from "react-router-dom";
import { Component } from "react";
// https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png
import "./App.css";
import AppContext from "./context";
import Home from "./components/HomePage";
import EmptyPage from "./components/EmptyPage";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = { activeTab: "" };
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
          <Route exact path="/1" component={Sidebar} />
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default App;
