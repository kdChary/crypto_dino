import { Link, withRouter } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaGear } from "react-icons/fa6";

import "./index.css";

const Header = () => {
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
        <button type="button" className="nav-option-button">
          <HiMenu size="19" color="#fffcc4" />
        </button>
        <button type="button" className="nav-option-button">
          <AiFillHome size="19" color="#fffcc4" />
        </button>
        <button type="button" className="nav-option-button">
          <FaGear size="19" color="#fffcc4" />
        </button>
      </div>
    </nav>
  );

  return <>{NavSmall()}</>;
};

export default withRouter(Header);
