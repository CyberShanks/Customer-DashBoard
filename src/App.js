import Sidebar from "./page/Sidebar";
import Navbar from "./page/Navbar";
import Footer from "./page/Footer";
import DashboardPage from "./page/Dashboard";
import "./App.css";

// API where JSON formatted data is fetched from
const dataApi = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  return (
    <div className="App">
      <div className="main-content">
        <Navbar />
        <Sidebar />
        <DashboardPage dataURL={dataApi} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
