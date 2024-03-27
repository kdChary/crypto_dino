import { Component } from "react";

import "./index.css";

const fetchStatusConst = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Home extends Component {
  state = { responseStatus: fetchStatusConst.initial, populationData: {} };

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
    return (
      <div className="home-bg">
        <h1>Yet to render !</h1>
      </div>
    );
  }
}
export default Home;
