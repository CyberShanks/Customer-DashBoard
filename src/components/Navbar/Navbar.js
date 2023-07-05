import "./Navbar.css";
import darkMode from "./assets/brightness-6.svg";

const Navbar = () => {
  return (
    <div className="navbar">
        <img
          id="profile-img"
          src="https://api.dicebear.com/6.x/lorelei/svg?seed=Randy&scale=100&size=80&backgroundColor=ffdfbf"
          alt=""
          className="icon"
        />

      <div className="light-mode">
        <img src={darkMode} id="night" className="icon" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
