import LinkContainer from "./LinkContainer";
import restaurantIcon from "./assets/icons/food.svg";
import bagIcon from "./assets/icons/bag-checked.svg";
import clockIcon from "./assets/icons/clock-time-eight.svg";
import adminIcon from "./assets/icons/account.svg";

const SideProjects = () => {
  return (
    <div className="side-projects">
      <div id="side-project-header">
        <h2>Projects</h2>
      </div>
      <LinkContainer
        icon={restaurantIcon}
        url={"https://cybershanks.github.io/Restaurant-Frontend/"}
        name={"Restaurant Website"}
      />
      <LinkContainer
        icon={bagIcon}
        url={"https://github.com/CyberShanks/SackTrail"}
        name={"SackTrail"}
      />

      <LinkContainer
        icon={clockIcon}
        url={"https://cybershanks.github.io/TimeTable_App/"}
        name={"TimeTable App"}
      />

      <LinkContainer
        icon={adminIcon}
        url={"https://cybershanks.github.io/Admin-Dashboard/"}
        name={"Admin Dashboard"}
      />
    </div>
  );
};

export default SideProjects;
