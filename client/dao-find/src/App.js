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
function App() {
  return (
    <div className="App">
     <Router>
     <Header />
     <div className="home-grid">
     <SideBar />
  {/* Switch -----_______--- */}
     <Switch>
     <Route path="/">
     <Home></Home>
     </Route>
     </Switch>
  {/* Switch -----_______--- */}
    </div>
    </Router>
    </div>
  );
}

export default App;
