import Sidebar from "./components/Sidebar/Sidebar";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar"
import "./App.css"

// API where JSON formatted data is fetched from
const dataApi = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Table dataURL={dataApi}/>
    </div>
  );
};

export default App;
