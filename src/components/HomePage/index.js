import { Component } from "react";

import "./index.css";
import AppContext from "../../context";
import Header from "../Header";
import Sidebar from "../Sidebar";

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

  renderRecharts = () => (
    <div className="fill-space1">
      loresum ipseram feoreu afagd as doaeufa vageap
    </div>
  );

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <Header />
        <div className="home-bg">
          <Sidebar />
          <div className="home-content">
            <div className="greeting-user">
              <div>
                <h3 className="welcome-msg">
                  Hello <span className="name">Sherry Johnson</span> 👋
                </h3>
                <p className="welcome-greeting">
                  Welcome to <span className="greeting">crypto_dino</span>
                </p>
              </div>
              <button type="button" className="start-trading-btn">
                Start Trading
              </button>
            </div>

            {this.renderRecharts()}
          </div>
        </div>
      </>
    );
  }
}
export default Home;
