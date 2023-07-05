import SideCurrentPage from "../components/Sidebar/SideCurrentPage";
import SideHeader from "../components/Sidebar/SideHeader";
import SideProjects from "../components/Sidebar/SideProjects";
import SideSocials from "../components/Sidebar/SideSocials";
import "../components/Sidebar/assets/css/Sidebar.css"

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
