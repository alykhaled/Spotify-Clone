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
    const [albumTracks,setAlbumTracks] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const getAlbum = async () => 
        {
            try {
                const res = await axios.get("/album/"+id);
                setRes(res.data);
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
    }, [albumData]);

    useEffect(() => {
        const getAlbumTracks = async () => 
        {
            try {
                const res = await axios.get("/album/"+id+"/tracks");
                setAlbumTracks(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAlbumTracks();
    }, [id]);

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
            <div className="tracksList">
                <div className="head">
                    <span>#</span>
                    <span className="titleTag">TITLE</span>
                    <span className="timeTag"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor"></path></svg></span>
                </div>
                <hr/>
                {albumTracks.map(track=>(
                    <div className="trackItem">
                        <span>{track.track_number}</span>
                        <div className="AlbumTrackInfo">
                            <span className="albumTrackName">{track.name}</span>
                            <span className="albumTrackArtist">Mashrou' Leila</span>
                        </div>
                        <span className="albumTrackDuration">{track.duartion}</span>
                    </div>
                ))};
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
