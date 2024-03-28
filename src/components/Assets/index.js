import { Component } from "react";

import { Rings } from "react-loader-spinner";

import CryptocurrencyItem from "../AssetItem";
import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

class Assets extends Component {
  state = { isLoading: true, cryptoData: [] };

  componentDidMount() {
    this.getCryptoData();
  }

  getCryptoData = async () => {
    const response = await fetch(
      "https://apis.ccbp.in/crypto-currency-converter"
    );
    const data = await response.json();
    const formattedData = data.map((eachData) => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }));

    this.setState({ isLoading: false, cryptoData: formattedData });
  };

  renderCryptocurrencyItem = () => {
    const { cryptoData } = this.state;

    return (
      <>
        {cryptoData.map((eachCurrency) => (
          <CryptocurrencyItem
            key={eachCurrency.id}
            cryptocurrencyData={eachCurrency}
          />
        ))}
      </>
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Header />
        <div className="asset-bg">
          <Sidebar />
          <div className="currencies-list-container">
            {isLoading ? (
              <div data-testid="loader">
                <Rings color="#78f0ff" height={90} width={90} radius={11} />
              </div>
            ) : (
              <>
                <div className="cryptocurrency-list-header">
                  <h1 className="list-title">Cryptocurrency Tracker</h1>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                    alt="crypocurrency"
                    className="assets-logo"
                  />
                </div>
                <ul className="cryptocurrency-item-list">
                  {this.renderCryptocurrencyItem()}
                </ul>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Assets;
