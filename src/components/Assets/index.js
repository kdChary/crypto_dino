import { Component } from "react";

import { Rings } from "react-loader-spinner";

import CryptocurrencyItem from "../AssetItem";
import "./index.css";

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
      <div className="currencies-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Rings color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <div className="cryptocurrency-list-header">
              <h1 className="list-title">Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="crypocurrency"
                className="app-logo"
              />
            </div>
            <ul className="cryptocurrency-item-list">
              {this.renderCryptocurrencyItem()}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Assets;
