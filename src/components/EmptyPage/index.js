import Header from "../Header";
import "./index.css";
import Sidebar from "../Sidebar";

const EmptyPage = () => (
  <>
    <Header />
    <div className="empty-page-bg">
      <Sidebar />
      <div className="empty-page-contents">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no-data"
          className="empty-image"
        />
        <div className="empty-text-section">
          <h3 className="empty-heading">You Have No Data To Present.</h3>
          <p className="empty-description">
            Please Trade to Update Your Activity...
          </p>
          <button type="button" className="empty-btn">
            Start Trading
          </button>
        </div>
      </div>
    </div>
  </>
);

export default EmptyPage;
