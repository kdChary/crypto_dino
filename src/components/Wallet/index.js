import { Component } from "react";

import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="wallet-bg">
          <Sidebar />
          <div className="wallet-content">Hello!!</div>
        </div>
      </>
    );
  }
}

export default Wallet;
