import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPersonCircle, BsQuestionCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

import "./index.css";
import MenuList from "../MenuList";

const Sidebar = () => (
  <nav className="side-bar">
    <div className="side-bar-header">
      <div className="app-details">
        <img
          src="https://img.icons8.com/fluency/144/000000/cardano.png"
          alt="app logo"
          className="side-logo"
        />
        <h3 className="app-name">crypto_dino</h3>
      </div>
      <div className="side-search-bar">
        <FiSearch />
        <input type="search" placeholder="Search" className="search-input" />
      </div>

      <MenuList />
    </div>

    <ul className="side-bar-footer">
      <Link to="/empty-page" className="link-item">
        <li className="side-bar-item">
          <button className="footer-btn">
            <BsQuestionCircle className="footer-icons" />
            <p className="footer-text">FAQ's</p>
          </button>
        </li>
      </Link>

      <Link to="/empty-page" className="link-item">
        <li className="side-bar-item">
          <button className="footer-btn">
            <IoMdNotifications className="footer-icons" />
            <p className="footer-text">Notifications</p>
          </button>
        </li>
      </Link>

      <Link to="/profile" className="link-item">
        <li className="footer-profile-section">
          <BsPersonCircle className="footer-icons" />
          <p className="footer-text">Profile</p>
          <BiDotsVerticalRounded className="dots" />
        </li>
      </Link>
    </ul>
  </nav>
);

export default Sidebar;

/* <AppContext.Consumer>
    {(value) => {
      const { activeTab, changeTab } = value;
      return ( );}}
  </AppContext.Consumer> */
