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
import { useState,useEffect } from 'react';
import {Howl} from 'howler';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  console.log(url);

  return [playing, toggle];
};

function App() {
  const [playing, toggle] = useAudio("https://154.82.111.45.nip.io/dl2/ZQ045TJf0PE69MYo6o-G4D57-U4CLR1P9T_IC3oS8ptes3uTN5icrp8hJfoS3qZRhDfTMkmKMZO5c9JLBuFAswvB2agDePpqowa_tMVJxSokAMo-4pCVTe5Drqqrj0Z03FX9JNT3rIMcP1953Se159BrLFxhsO1y195DXUbU-0lYOTdsP6wrC0wykHItVXhDrVv7v5Uf47AGGUw4fYyO4Xcm4vpUzv5Z7ssR_9XaYVzux3qDG428HcqN2tmhD9sc1RFtbP85-xFRDKWhOPNrFFROO1QvUKGLx-WqS1hFQMpE_B4SsMwoZAgzAsx8nUEm4NCjljBNfOaxleTi8IP5h8133oMb7rzFubgwLyi5AB4nECMUCg1vRhqjkVXFvBw1G4tVnSu2nwbO1O1CX5J3HFm0oUFF873-5oxtUzbl6FUpsLIbu4jwy7DeUkg5JG04KKmfYHRaiNBKA0IYd38k0XMTtvcq_KCBX-F746pC3-FEqy9nn_ZiTDovLH2n6ehaTXsIY9ySOGJ5kqqIFpQoEIsCfNd7XcQNDNvdVgs3GYIEN-vxVFiJTs1SAIz3pno-PduqyRdcDxgrToIx-ANGq9E2IJQCZ6g9jRYJoVHLZtRZFY7C_34N0MEqTElCntfoJd2TO8y2wy_sG0i8LFiLZHPwo1YZwL7DOd6_Uaz5cnDTryYO-0x2Ivwf01msnqapB4mCczBmCrX8P764qmr2e1nlUchYV060mOSl9ox5umMc0m9MSVGtj75CjFD2MN2ebd7eUdxzRZi7wN-0Z0wgOeVj49rn3OK0El8akoQHHaigmFoiSQkizxuczV035axirxwyZCXB05xDB9jMDwNgHfOflBj9Z_CHNyvFWHC0EIKgNlnVF42FpMp4_7Lj-EXMNnkvlaRjHtAlvGyXXAOGmptjE9bpFWJDphJ57UpDEjitWHclMcjob3bLD6sOhByVpHOEzjnP1OLmzTVu52ls9pcjg6MkASU7peacOIPQ_-KWy8xrseVBGETmOkhR7etfBrdSA2ioTqkmX5phyLK-fJsy0GMu5_O7z36d7jgubZTJpL7DotYYvzejmGKjIH0YSCAH_LZMoiKmwlPxnh83WuziGkZ6PXhGp4bE_OSNlYhwvM9Frq1UUJOt9Cj7e7JNDfOMc4UycGinyWcSGcfSGuUH6Ige2Yv0lgeZgryTySIPMvxKKfp1BlCO1Cc1M-U9-PDC9iXqhT5jvnnGdoJiP01Nwwez3VgysZUVHGg0BLo0MkKLNlXMXw/vKECngKv");
  const [listenedTrack, setListenedTrack] = useState({});

  useEffect(() => {
    console.log(listenedTrack);
    // const link = "https://154.82.111.45.nip.io/dl2/ZQ045TJf0PE69MYo6o-G4D57-U4CLR1P9T_IC3oS8ptes3uTN5icrp8hJfoS3qZRhDfTMkmKMZO5c9JLBuFAswvB2agDePpqowa_tMVJxSokAMo-4pCVTe5Drqqrj0Z03FX9JNT3rIMcP1953Se159BrLFxhsO1y195DXUbU-0lYOTdsP6wrC0wykHItVXhDrVv7v5Uf47AGGUw4fYyO4Xcm4vpUzv5Z7ssR_9XaYVzux3qDG428HcqN2tmhD9sc1RFtbP85-xFRDKWhOPNrFFROO1QvUKGLx-WqS1hFQMpE_B4SsMwoZAgzAsx8nUEm4NCjljBNfOaxleTi8IP5h8133oMb7rzFubgwLyi5AB4nECMUCg1vRhqjkVXFvBw1G4tVnSu2nwbO1O1CX5J3HFm0oUFF873-5oxtUzbl6FUpsLIbu4jwy7DeUkg5JG04KKmfYHRaiNBKA0IYd38k0XMTtvcq_KCBX-F746pC3-FEqy9nn_ZiTDovLH2n6ehaTXsIY9ySOGJ5kqqIFpQoEIsCfNd7XcQNDNvdVgs3GYIEN-vxVFiJTs1SAIz3pno-PduqyRdcDxgrToIx-ANGq9E2IJQCZ6g9jRYJoVHLZtRZFY7C_34N0MEqTElCntfoJd2TO8y2wy_sG0i8LFiLZHPwo1YZwL7DOd6_Uaz5cnDTryYO-0x2Ivwf01msnqapB4mCczBmCrX8P764qmr2e1nlUchYV060mOSl9ox5umMc0m9MSVGtj75CjFD2MN2ebd7eUdxzRZi7wN-0Z0wgOeVj49rn3OK0El8akoQHHaigmFoiSQkizxuczV035axirxwyZCXB05xDB9jMDwNgHfOflBj9Z_CHNyvFWHC0EIKgNlnVF42FpMp4_7Lj-EXMNnkvlaRjHtAlvGyXXAOGmptjE9bpFWJDphJ57UpDEjitWHclMcjob3bLD6sOhByVpHOEzjnP1OLmzTVu52ls9pcjg6MkASU7peacOIPQ_-KWy8xrseVBGETmOkhR7etfBrdSA2ioTqkmX5phyLK-fJsy0GMu5_O7z36d7jgubZTJpL7DotYYvzejmGKjIH0YSCAH_LZMoiKmwlPxnh83WuziGkZ6PXhGp4bE_OSNlYhwvM9Frq1UUJOt9Cj7e7JNDfOMc4UycGinyWcSGcfSGuUH6Ige2Yv0lgeZgryTySIPMvxKKfp1BlCO1Cc1M-U9-PDC9iXqhT5jvnnGdoJiP01Nwwez3VgysZUVHGg0BLo0MkKLNlXMXw/vKECngKv";
    // if (link !== undefined)
    // {
    //   const sound = new Howl({
    //     link,
    //     html5: true
    //   });
    //   sound.play();
    // }
    
  }, [listenedTrack])
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
          <audio className="audio-element">
            <source src={listenedTrack.link}></source>
          </audio>
            <NavBar/>
            <Switch>
              <Route path="/search">
                seach
              </Route>
              <Route path="/artist/:id">
                <Artist />
              </Route>
              <Route path="/album/:id">
                <Album lisentedTrack={setListenedTrack}/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>    
          </div>
          <div className="musicControls">
            <div className="trackInfos">
              <div className="trackImage">
                  <img src={listenedTrack.image === undefined ? "https://i.scdn.co/image/ab67616d00001e0291a0ef8db4b7869b13314580" : listenedTrack.image} alt="ss" />
              </div>
              <div className="infos">
                <div className="trackName">
                    <p>{listenedTrack.name}</p>
                </div>
                <div className="trackArtist">
                    <p>{listenedTrack.artist === undefined ? "" : listenedTrack.artist.name}</p>                        
                </div>
              </div>
              <button type="button" class="smallBtn" >
                <svg role="img" height="20" width="20" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path></svg>
              </button>
            </div>

            <div className="controls">
              <div className="controlBtn">
                <button className="smallBtn">
                  <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path></svg>                
                </button>
                <button className="smallBtn">
                  <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path></svg>                
                </button>
                <button className="roundBtn playBtn">
                  <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path></svg>
                </button>
                <button className="smallBtn">
                  <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path></svg>                
                </button>
                <button className="smallBtn">
                  <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"></path></svg>                
                </button>
              </div>
              <div className="controlBar">
                <input className="slider" id="dur" type="range" name="rng" />
              </div>
            </div>

            <div className="extra">
              <button className="smallBtn">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path></svg>                
              </button>
              <button className="smallBtn">
                <svg role="img" height="16" width="16" aria-label="Connect to a device" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M3.001 12h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-9h10v8h-10V3zm12.5 11H.5c-.275 0-.5.225-.5.5s.225.5.5.5h15.001c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"></path><path d="M3.001 12h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-9h10v8h-10V3zm12.5 11H.5c-.275 0-.5.225-.5.5s.225.5.5.5h15.001c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"></path></svg>              
              </button>
            </div>
          </div>
        </div>
        </Switch>
      </Router>
  );
}

export default App;
