import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home   from './components/Home/Home';
import Artist from './components/Artist/Artist';
import Album  from './components/Album/Album';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <SignIn/>
          </Route>
        <div className="outerWrap">
          <div className="App">
              <NavBar/>
              <Switch>
                <Route path="/search">
                  seach
                </Route>
                <Route path="/artist/:id">
                  <Artist />
                </Route>
                <Route path="/album/:id">
                  <Album />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>    
          </div>
          <div className="musicControls">
            Music Controls
          </div>
        </div>
        </Switch>
      </Router>
  );
}

export default App;
