import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import './album.scss';
import Card from '../Card/Card';
import Color, { Palette } from "color-thief-react";

function Album() {
    const {id} = useParams();
    const [albumData,setRes] = useState([]);
    const [artistAlbums,setAlbums] = useState([]);
    const [albumBack,setAlbumBack] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const getAlbum = async () => 
        {
            try {
                const res = await axios.get("/album/"+id);
                if(res !== undefined)
                setRes(res.data);
                // console.log(res.data);
                
            } catch (error) {
                console.log(error);
            }
        };        
        getAlbum();
    },[id]);

    useEffect(() => {
        const getArtistAlbums = async () => 
        {
            try {
                const albums = await axios.get("/artist/"+albumData.artist+"/albums");
                setAlbums(albums.data);
            } catch (error) {
                console.log(error);
            }
        };
        getArtistAlbums();
    }, [albumData])

    return (
        <div className="album">
             <Color src={albumData.image} crossOrigin="anonymous" format="hex">
                {({ data, loading }) => {
                return (
                    <div className="header" style={{backgroundColor:data}}>
                        <div className="wrapper">
                            <img id="myimg" src={albumData.image} alt="fds" />
                            <div className="albumData">
                                <p>Album</p>
                                <div className="albumName">
                                    <h1>{albumData.name}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                );}}
            </Color>
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
            <div className="list">
                {artistAlbums.map(card=>(
                    <Card data={card}/>
                ))};
            </div>
        </div>
    )
}

export default Album
