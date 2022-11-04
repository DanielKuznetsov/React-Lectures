import './App.css';
import Login from "./user/Login"
import Logout from "./user/Logout"

function App() {
  return (
    <div className="App">
      <Login />
      <Logout user="Daniel Bugl"/>
    </div>
  );
}

export default App;
