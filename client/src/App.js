import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
      <div className="outerWrap">
        <div className="main">
        <Router>
          <NavBar />
          <div className="App">
              <Switch>
                <Route path="/search">
                  seach
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>    
          </div>
        </Router>
        </div>
        <div className="musicControls">
          Music Controls
        </div>
      </div>
      
    
  );
}

export default App;
