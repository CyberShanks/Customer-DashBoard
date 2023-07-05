import SideCurrentPage from "./SideCurrentPage";
import SideHeader from "./SideHeader";
import SideProjects from "./SideProjects";
import SideSocials from "./SideSocials";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="side-bar">
      <SideHeader />
      <SideCurrentPage />
      <SideSocials />
      <SideProjects />
    </div>
  );
};

export default Sidebar;
