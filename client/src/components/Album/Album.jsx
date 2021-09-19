import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import './album.scss';

function Album() {
    const {id} = useParams();
    const [albumData,setRes] = useState([]);
    useEffect(() => {
        const getAlbum = async () => 
        {
            try {
                const res = await axios.get("/album/"+id);
                setRes(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };        
        getAlbum();
    }, []);
    return (
        <div className="album">
            <div className="header">
                <div className="wrapper">
                    <img src={albumData.image} alt="fds" />
                    <div className="albumData">
                        <p>Album</p>
                        <div className="albumName">
                            <h1>{albumData.name}</h1>
                        </div>

                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default Album
