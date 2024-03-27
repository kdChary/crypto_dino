import { Link } from "react-router-dom";

import { RiBuildingFill, RiQuestionLine } from "react-icons/ri";
import { HiCube } from "react-icons/hi";
import { GiEmptyHourglass, GiWallet } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";

import "./index.css";

const MenuList = () => (
  <ul className="menu-list">
    <Link to="/" className="link-item">
      <li className="menu-item">
        <button className="menu-btn">
          <AiFillHome /> <p className="item-text">Home</p>
        </button>
      </li>
    </Link>

    <Link to="/" className="link-item">
      <li className="menu-item">
        <button className="menu-btn">
          <RiBuildingFill /> <p className="item-text">Organization</p>
        </button>
      </li>
    </Link>

    <Link to="/" className="link-item">
      <li className="menu-item">
        <button className="menu-btn">
          <HiCube /> <p className="item-text">Assets</p>
        </button>
      </li>
    </Link>

    <Link to="/" className="link-item">
      <li className="menu-item">
        <button className="menu-btn">
          <GiEmptyHourglass /> <p className="item-text">History</p>
        </button>
      </li>
    </Link>

    <Link to="/wallet" className="link-item">
      <li className="menu-item">
        <button className="menu-btn">
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

export default MenuList;
