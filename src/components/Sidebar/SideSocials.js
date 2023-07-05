import LinkContainer from "./LinkContainer";

import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import discordIcon from "./assets/icons8-discord.svg";

const SideSocials = () => {
  return (
    <div className="social-links">
      <div className="side-social-header">
        <h2>Socials</h2>
      </div>
      <LinkContainer
        icon={githubIcon}
        url={"https://github.com/CyberShanks"}
        name={"Github"}
      />

      <LinkContainer
        icon={linkedinIcon}
        url={"https://linkedin.com/in/shashank-mishra-722182205"}
        name={"LinkedIn"}
      />

      <LinkContainer
        icon={discordIcon}
        url={"http://discordapp.com/users/shashank8129"}
        name={"Discord"}
      />

    </div>
  );
};

export default SideSocials;
