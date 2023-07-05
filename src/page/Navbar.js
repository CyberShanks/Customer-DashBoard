import "../components/Navbar/assets/css/Navbar.css";
import darkMode from "../components/Navbar/assets/icons/brightness-6.svg";

const Navbar = () => {

  const handleChangeTheme = () => {
    const currentTheme = document.body.dataset.theme;
    const nextTheme = currentTheme === "light"? "dark": "light";
    document.body.dataset.theme = nextTheme;
  }
  
  return (
    <div className="navbar">
        <img
          id="profile-img"
          src="https://api.dicebear.com/6.x/lorelei/svg?seed=Randy&scale=100&size=80&backgroundColor=ffdfbf"
          alt=""
          className="icon"
        />

      <span className="light-mode" onClick={handleChangeTheme}>
        <img src={darkMode} id="night" className="icon" alt=""/>
      </span>
    </div>
  );
};

export default Navbar;
