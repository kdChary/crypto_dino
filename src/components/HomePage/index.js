import { Component } from "react";

import "./index.css";
import AppContext from "../../context";
import Header from "../Header";

const fetchStatusConst = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Home extends Component {
  state = {
    responseStatus: fetchStatusConst.initial,
    populationData: {},
  };

  componentDidMount() {
    this.getPopulation();
  }

  getPopulation = async () => {
    this.setState({ responseStatus: fetchStatusConst.inProgress });
    const url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <Header />
        <div className="home-bg">
          <div className="home-content">
            <h3 className="welcome-msg">
              Hello <span className="name">Sherry Johnson</span> 👋
            </h3>
            <p className="welcome-greeting">
              Welcome to <span className="greeting">crypto_dino</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
