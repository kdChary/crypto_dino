import { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";

import "./index.css";
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
    populationData: [],
  };

  componentDidMount() {
    this.getPopulation();
  }

  modifyData = (data) => ({
    id: data["ID Nation"],
    year: data["ID Year"],
    nation: data.Nation,
    population: data.Population,
  });

  getPopulation = async () => {
    this.setState({ responseStatus: fetchStatusConst.inProgress });
    const url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const modifiedData = data.data.map((item) => this.modifyData(item));
      this.setState({
        populationData: modifiedData,
        responseStatus: fetchStatusConst.success,
      });
      //   console.log(modifiedData);
    } else {
      this.setState({ responseStatus: fetchStatusConst.failure });
      console.log("failed to fetch");
    }
  };

  renderRecharts = () => {
    const { populationData } = this.state;

    const DataFormatter = (number) => {
      if (number > 1000000) {
        return `${(number / 1000000).toString()}M`;
      }
      return number.toString();
    };

    return (
      <ResponsiveContainer width="95%" height={350}>
        <BarChart
          data={populationData}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="year"
            tick={{
              stroke: "gray",
              strokeWidth: 0.7,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="population"
            name="US Population"
            fill="#1f77b4"
            barSize="10%"
          />
          {/* <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  };

  renderChartsSm = () => {
    const data = [
      {
        count: 809680,
        language: "Telugu",
      },
      {
        count: 4555697,
        language: "Hindi",
      },
      {
        count: 12345657,
        language: "English",
      },
    ];
    return (
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Dodge" size="13" fill="#fecba6" />
            <Cell name="Etherium" fill="#b3d23f" />
            <Cell name="Bitcoin" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="center"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  render() {
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

            <div className="hide">{this.renderRecharts()}</div>
            <div className="show">{this.renderChartsSm()}</div>

            <div className="home-assets">
              <div className="home-asset-item">
                <FaBitcoin />
              </div>
              <div className="home-asset-item">
                <FaEthereum />
              </div>
              <div className="home-asset-item">
                <SiDogecoin />
              </div>
              <div className="home-asset-item">
                <SiLitecoin />
              </div>
            </div>
            <p className="info">Navigate to Assets Page for more Info!</p>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
