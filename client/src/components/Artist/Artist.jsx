import React from 'react'
import './artist.scss';
import { useEffect,useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'
import Card from '../Card/Card';


function Artist() {
    const {id} = useParams();
    const [artistData,setRes] = useState([]);
    const [artistAlbums,setAlbums] = useState([]);

    useEffect(() => {
        const getArtist = async () => 
        {
            try {
                const res = await axios.get("/artist/"+id);
                setRes(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        const getArtistAlbums = async () => 
        {
            try {
                const albums = await axios.get("/artist/"+id+"/albums");
                setAlbums(albums.data);
            } catch (error) {
                console.log(error);
            }
        };
        getArtist();
        getArtistAlbums();
    }, []);
    return (
        <div className="artist">

            {/* Artist Cover */}
            <div className="cover" style={{ backgroundImage: `url(${artistData.profileImage})` }}>
                <div className="infos">
                    <h1 className="artistName">{artistData.name}</h1>
                    <p className="monthlyNumber">270,572 monthly listeners</p>
                </div>
            </div>

            {/* Music Controls */}
            <div className="controls">
                <button className="playBtn">
                    <svg height="32" role="img" width="32" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                </button>
                <button className="followBtn" >
                    Follow
                </button>
                <button className="optionsBtn" >
                    ...
                </button>
            </div>

            {/* Popular Tracks */}
            <h1>Popular Tracks</h1>
            <div className="popularTracks">
                <div className="trackItem">
                    <div className="trackNum">
                        <p>1</p>
                    </div>
                    <div className="trackImage">
                        <img src="https://i.scdn.co/image/ab67616d00001e027e521931327ae0775498fe72" alt="ss" />
                    </div>
                    <div className="trackName">
                        <p>Aoede</p>
                    </div>
                    <div className="trackListens">
                        <p>249,541</p>                        
                    </div>
                    <div className="trackDuration">
                        <p>3:45</p>
                    </div>
                </div>
                <div className="trackItem">
                    <div className="trackNum">
                        <p>1</p>
                    </div>
                    <div className="trackImage">
                        <img src="https://i.scdn.co/image/ab67616d00001e027e521931327ae0775498fe72" alt="ss" />
                    </div>
                    <div className="trackName">
                        <p>Aoede</p>
                    </div>
                    <div className="trackListens">
                        <p>249,541</p>                        
                    </div>
                    <div className="trackDuration">
                        <p>3:45</p>
                    </div>
                </div>
                <div className="trackItem">
                    <div className="trackNum">
                        <p>1</p>
                    </div>
                    <div className="trackImage">
                        <img src="https://i.scdn.co/image/ab67616d00001e027e521931327ae0775498fe72" alt="ss" />
                    </div>
                    <div className="trackName">
                        <p>Aoede</p>
                    </div>
                    <div className="trackListens">
                        <p>249,541</p>                        
                    </div>
                    <div className="trackDuration">
                        <p>3:45</p>
                    </div>
                </div>
                
            </div>

            {/* Popular Albums */}
            <h1>Popular releases</h1>
            <div className="list">
                {artistAlbums.map(card=>(
                    <Card data={card}/>
                ))};
            </div>

            {/* All Albums */}
            <h1>Albums</h1>
            <div className="list">
                {artistAlbums.map(card=>(
                    <Card  data={card}/>
                ))};
            </div>

            {/* Singles and EPs */}
            <h1>Singles and EPs</h1>
            <div className="list">
                {artistAlbums.map(card=>(
                    <Card  data={card}/>
                ))};
            </div>

            {/* Fans also like */}
            <h1>Fans also like</h1>
            <div className="list">
                {artistAlbums.map(card=>(
                    <Card  data={card}/>
                ))};
            </div>
            {/* About section */}

        </div>
    )
}

export default Artist
