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
            <div className="trackInfos">
              <div className="trackImage">
                  <img src="https://i.scdn.co/image/ab67616d00001e027e521931327ae0775498fe72" alt="ss" />
              </div>
              <div className="infos">
                <div className="trackName">
                    <p>Aoede</p>
                </div>
                <div className="trackArtist">
                    <p>Mashrou' Leila</p>                        
                </div>
              </div>
              <button type="button" role="switch" aria-checked="false" aria-label="Save to Your Library" class="B77TpDT6WaoYUqQxvy4Z" data-testid="add-button" title="Save to Your Library"><svg role="img" height="32" width="32" viewBox="0 0 32 32" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M27.672 5.573a7.904 7.904 0 00-10.697-.489c-.004.003-.425.35-.975.35-.564 0-.965-.341-.979-.354a7.904 7.904 0 00-10.693.493A7.896 7.896 0 002 11.192c0 2.123.827 4.118 2.301 5.59l9.266 10.848a3.196 3.196 0 004.866 0l9.239-10.819A7.892 7.892 0 0030 11.192a7.896 7.896 0 00-2.328-5.619zm-.734 10.56l-9.266 10.848c-.837.979-2.508.979-3.346 0L5.035 16.104A6.9 6.9 0 013 11.192 6.9 6.9 0 015.035 6.28a6.935 6.935 0 014.913-2.048 6.89 6.89 0 014.419 1.605A2.58 2.58 0 0016 6.434c.914 0 1.555-.53 1.619-.585a6.908 6.908 0 019.346.431C28.277 7.593 29 9.337 29 11.192s-.723 3.6-2.062 4.941z"></path></svg></button>
            </div>

            <div className="controls">
              <div className="controlBtn">
                <button className="roundBtn playBtn">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path></svg>
                </button>
              </div>
              <div className="controlBar">
                <input className="slider" id="dur" type="range" name="rng" />
              </div>
            </div>
            <div className="trackInfos">
              <div className="trackImage">
                  <img src="https://i.scdn.co/image/ab67616d00001e027e521931327ae0775498fe72" alt="ss" />
              </div>
              <div className="trackName">
                  <p>Aoede</p>
              </div>
              <div className="trackArtist">
                  <p>249,541</p>                        
              </div>
            </div>
          </div>
        </div>
        </Switch>
      </Router>
  );
}

export default App;
