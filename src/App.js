import Sidebar from "./components/Sidebar/Sidebar";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

// API where JSON formatted data is fetched from
const dataApi = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  return (
    <div className="App">
      <div className="main-content">
        <Navbar />
        <Sidebar />
        <Table dataURL={dataApi} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
