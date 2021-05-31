import './App.css';
import Sidebar from './Components/sidebar'
import SearchBar from './Components/Searchbar'
import logo from './Components/logo1.png'
import TotalIncome from './Components/MainData'
function App() {
  return (
    <div className="App">
      <div className="homme">
      <img className="pic"src={logo}  width="30px"></img>
      <h3 className="name">Artemis</h3>
      </div>
      <Sidebar />
      <SearchBar />
      <TotalIncome />
    </div>
  );
}

export default App;
