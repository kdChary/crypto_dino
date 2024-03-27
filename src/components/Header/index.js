import { Link, withRouter } from "react-router-dom";
import { Popup } from "reactjs-popup";

import { HiMenu } from "react-icons/hi";
import { FaGear } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

import "./index.css";
import MenuList from "../MenuList";

const Header = () => {
  const renderPopupMenu = () => (
    <Popup
      modal
      trigger={
        <button type="button" className="nav-option-button">
          <HiMenu className="menu-icon" />
        </button>
      }
    >
      {(close) => (
        <div className="popup-menu">
          <button type="button" className="close-btn" onClick={close}>
            <IoIosClose size="17" />
          </button>
          <MenuList />
        </div>
      )}
    </Popup>
  );

  const NavSmall = () => (
    <nav className="nav-small">
      <div className="app-details">
        <img
          src="https://img.icons8.com/fluency/144/000000/cardano.png"
          alt="app logo"
          className="app-logo"
        />
        <h3 className="app-name">crypto_dino</h3>
      </div>

      <div className="nav-options-card">
        {renderPopupMenu()}

        <Link to="/profile" className="link-item">
          <button type="button" className="nav-option-button">
            <BsPersonCircle className="profile-icon" />
          </button>
        </Link>

        <button type="button" className="nav-option-button">
          <FaGear className="nav-icon" />
        </button>
      </div>
    </nav>
  );

  return <>{NavSmall()}</>;
};

export default withRouter(Header);
