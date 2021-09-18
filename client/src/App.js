import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Artist from './components/Artist/Artist';

function App() {
  return (
      <div className="outerWrap">
        <div className="App">
          <Router>
            <NavBar />
            <Switch>
              <Route path="/search">
                seach
              </Route>
              <Route path="/artist/:id">
                <Artist/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>    
          </Router>
        </div>
        <div className="musicControls">
          Music Controls
        </div>
      </div>
      
    
  );
}

export default App;
