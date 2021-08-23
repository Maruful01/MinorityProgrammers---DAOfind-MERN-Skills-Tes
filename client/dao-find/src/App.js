import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Home/Header/Header';
import SideBar from './components/Home/Header/SideBar/SideBar';
import ListedDaos from './components/Home/ListedDaos/ListedDaos';
import AddDaos from './components/AddDaos/AddDaos';
function App() {
  return (
    <div className="App">
     <Router>
     <div>
     <Header />
<div  className="home-grid">
     <SideBar />
  {/* Switch -----_______--- */}

     <Switch>
        <Route  path="/add">
        <AddDaos></AddDaos>
        </Route>

        <Route path="/">
         <Home></Home>
        </Route>
     </Switch>
  {/* Switch -----_______--- */}
  </div>
    </div>

    </Router>

    </div>
  );
}

export default App;
