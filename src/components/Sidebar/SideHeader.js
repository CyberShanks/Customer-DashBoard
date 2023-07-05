import dashBoardIcon from "./assets/view-dashboard-outline.svg"

const SideHeader = () => {

    return (
        <div className="side-header">
        <div className="sidebar-icon">
          <img src={dashBoardIcon} alt="" />
        </div>
        <div className="sidebar-heading">Dashboard</div>
      </div>
    )
}

export default SideHeader;