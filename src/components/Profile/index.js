import { FaAirbnb } from "react-icons/fa";
import { GiCubeforce } from "react-icons/gi";
import { SiYamahamotorcorporation } from "react-icons/si";
import { SlSocialSoundcloud } from "react-icons/sl";
import { TbSocial } from "react-icons/tb";

import "./index.css";
import Header from "../Header";
import Sidebar from "../Sidebar";

// TODO: align the data properly

const Profile = () => {
  const userPic =
    "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png";

  return (
    <>
      <Header />
      <div className="profile-bg">
        <Sidebar />

        <div className="user-profile">
          <h2 className="greetings">Hello ! 👋</h2>
          <div className="user-details">
            <img src={userPic} alt="profile_pic" className="profile-img" />
            <h3 className="user-name">
              Sherry Johnson
              <br />
              <span className="contact">@sherry_123</span>
            </h3>
          </div>

          <ul className="user-accounts">
            <li className="account-item">
              <p className="account-data">Balance : </p>
              <span className="amount">$100.00</span>
            </li>
            <li className="account-item">
              <p className="account-data">Invested : </p>
              <span className="amount">$10.00</span>
            </li>
            <li className="account-item">
              <p className="account-data">Stocks Owned : </p>
              <span className="amount">7</span>
            </li>
          </ul>

          <p> My Investments</p>
          <div className="investment-list">
            <div className="invested-item">
              <FaAirbnb size="33" color="#fffccf" />
            </div>
            <div className="invested-item">
              <GiCubeforce size="33" color="#fffccf" />
            </div>
            <div className="invested-item">
              <SiYamahamotorcorporation size="33" color="#fffccf" />
            </div>
            <div className="invested-item">
              <SlSocialSoundcloud size="33" color="#fffccf" />
            </div>
            <div className="invested-item">
              <TbSocial size="33" color="#fffccf" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
