import "./Navbar.css";
import darkMode from "./assets/brightness-6.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <h1 id="header">Shanks' Productions</h1>
      </div>
        <div className="nav-links">
          <div className="admin-icon">
            <img
              id="profile-img"
              src="https://api.dicebear.com/6.x/lorelei/svg?seed=Randy&scale=100&size=80&backgroundColor=ffdfbf"
              alt=""
            />
          </div>

          <div className="light-mode">
            <img src={darkMode} id="night" alt="" />
          </div>
        </div>
    </div>
  );
};

export default Navbar;
