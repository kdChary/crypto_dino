import { Link, withRouter } from "react-router-dom";

import { RiBuildingFill } from "react-icons/ri";
import { HiCube } from "react-icons/hi";
import { GiEmptyHourglass, GiWallet } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

import "./index.css";
import AppContext from "../../context";

const tabConstant = {
  home: "HOME",
  profile: "PROFILE",
  wallet: "WALLET",
  notifications: "NOTIFICATIONS",
  assets: "ASSETS",
  organization: "ORGANIZATION",
  history: "HISTORY",
};

const findActive = (activeTab) => {
  switch (activeTab) {
    case tabConstant.home:
      return tabConstant.home;

    case tabConstant.assets:
      return tabConstant.assets;

    case tabConstant.notifications:
      return tabConstant.notifications;

    case tabConstant.profile:
      return tabConstant.profile;

    case tabConstant.wallet:
      return tabConstant.wallet;

    case tabConstant.organization:
      return tabConstant.organization;

    case tabConstant.history:
      return tabConstant.history;

    default:
      return null;
  }
};

const MenuList = () => (
  <AppContext.Consumer>
    {(value) => {
      const { activeTab, changeTab } = value;
      const active = findActive(activeTab);
      let isActive = active ? "tab-active" : null;

      return (
        <ul className="menu-list">
          <Link to="/" className="link-item">
            <li className="menu-item">
              <button
                className={
                  activeTab === tabConstant.home
                    ? `menu-btn ${isActive}`
                    : "menu-btn"
                }
                type="button"
                onClick={() => changeTab(tabConstant.home)}
              >
                <AiFillHome /> <p className="item-text">Home</p>
              </button>
            </li>
          </Link>

          <Link to="/organization" className="link-item">
            <li className="menu-item">
              <button
                className={
                  activeTab === tabConstant.organization
                    ? `menu-btn ${isActive}`
                    : "menu-btn"
                }
                type="button"
                onClick={() => changeTab(tabConstant.organization)}
              >
                <RiBuildingFill /> <p className="item-text">Organization</p>
              </button>
            </li>
          </Link>

          <Link to="/assets" className="link-item">
            <li className="menu-item">
              <button
                className={
                  activeTab === tabConstant.assets
                    ? `menu-btn ${isActive}`
                    : "menu-btn"
                }
                type="button"
                onClick={() => changeTab(tabConstant.assets)}
              >
                <HiCube /> <p className="item-text">Assets</p>
              </button>
            </li>
          </Link>

          <Link to="/history" className="link-item">
            <li className="menu-item">
              <button
                className={
                  activeTab === tabConstant.history
                    ? `menu-btn ${isActive}`
                    : "menu-btn"
                }
                type="button"
                onClick={() => changeTab(tabConstant.history)}
              >
                <GiEmptyHourglass /> <p className="item-text">History</p>
              </button>
            </li>
          </Link>

          <Link to="/wallet" className="link-item">
            <li className="menu-item">
              <button
                className={
                  activeTab === tabConstant.wallet
                    ? `menu-btn ${isActive}`
                    : "menu-btn"
                }
                type="button"
                onClick={() => changeTab(tabConstant.wallet)}
              >
                <GiWallet /> <p className="item-text">Wallet</p>
              </button>
            </li>
          </Link>
        </ul>
      );
    }}
  </AppContext.Consumer>
);

export default withRouter(MenuList);
