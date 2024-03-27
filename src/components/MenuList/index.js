import { Link } from "react-router-dom";

import { RiBuildingFill, RiQuestionLine } from "react-icons/ri";
import { HiCube } from "react-icons/hi";
import { GiEmptyHourglass, GiWallet } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";

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

          <ul className="large-options">
            <Link to="/empty-page">
              <li className="large-optn-items">
                <button className="large-optn-btn">
                  <RiQuestionLine color="#fffcc4" /> FAQ's
                </button>
              </li>
            </Link>

            <Link to="/empty-page">
              <li className="large-optn-items">
                <button className="large-optn-btn">
                  <IoMdNotifications /> Notifications
                </button>
              </li>
            </Link>

            <Link to="/profile">
              <li className="large-optn-items">
                <BsPersonCircle /> Profile <BiDotsVerticalRounded />
              </li>
            </Link>
          </ul>
        </ul>
      );
    }}
  </AppContext.Consumer>
);

export default MenuList;
