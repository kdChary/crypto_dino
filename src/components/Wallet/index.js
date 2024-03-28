import React, { Component } from "react";
import Web3 from "web3";

import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

class MetaMaskIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      errorMessage: "",
    };
  }

  connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        // Check if connected

        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          // User denied account access
          console.log(error);
        }

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          this.setState({ isConnected: true, errorMessage: "" });
          const networkId = await web3.eth.net.getId();
          const userAddress = accounts[0];
          console.log(userAddress);
        }
      } else {
        this.setState({
          isConnected: false,
          errorMessage: "MetaMask extension not detected.",
        });
      }
    } catch (error) {
      this.setState({ isConnected: false, errorMessage: error.message });
    }
  };

  render() {
    const { isConnected, errorMessage } = this.state;
    return (
      <>
        <Header />
        <div className="wallet-bg">
          <Sidebar />
          <div className="wallet-content">
            <button onClick={this.connectWallet} className="connect-btn">
              Connect Wallet
            </button>
            {isConnected && (
              <p className="success">*Wallet connected successfully!</p>
            )}
            {errorMessage && <p className="failed">*{errorMessage}</p>}
          </div>
        </div>
      </>
    );
  }
}

export default MetaMaskIntegration;
