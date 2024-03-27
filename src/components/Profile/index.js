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

        <div className="User-profile">
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
              <p className="account-data">Balance: $100.00</p>
            </li>
            <li className="account-item">
              <p className="account-data">Invested: $10.50</p>
            </li>
            <li className="account-item">
              <p className="account-data">Stocks Owned: 5</p>
            </li>
          </ul>

          <div className="investment-list">Render the investment items</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
