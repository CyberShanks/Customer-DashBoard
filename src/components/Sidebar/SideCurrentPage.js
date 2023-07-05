import customerDashboardIcon from "./assets/account-group.svg";

const SideCurrentPage = () => {
  return (
    <div className="current-page">
      <div className="link-container">
        <div className="icon">
          <img className="icon" src={customerDashboardIcon} alt="" />
        </div>
        <p className="side-text">Dashboard</p>
      </div>
    </div>
  );
};

export default SideCurrentPage;
