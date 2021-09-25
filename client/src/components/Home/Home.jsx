import React from 'react'
import { useEffect,useState } from 'react';
import Card from '../Card/Card';
import './home.scss';
import axios from "axios";
const dotenv = require('dotenv');

function Home() {
    dotenv.config();
    const [cardData,setRes] = useState([]);
    const [recenltyPlayed,setRecenltyPlayed] = useState([]);
    useEffect(() => {

        const getArtists = async () => 
        {
            try {
                const res = await axios.get("/artist/top");
                setRes(res.data);
            } catch (error) {
                console.log(error);
            }
        };        
        getArtists();
    }, []);

    useEffect(() => {
        const getRecentlyPlayed = async () => 
        {
            try {
                const res = await axios.get("/me/recent",{
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ0N2QzZTYzMGYwOTc1NjJmYjBmZDIiLCJpYXQiOjE2MzE4Nzg1MjJ9.-MHDrIb9Y2GcwilNPA0L8HlTG4fRF4SmUSywaK5NAzM",
                    }
                });
                setRecenltyPlayed(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getRecentlyPlayed();
    }, []);

    return (
        <div className="home">
            <div className="gradientLayer" style={{backgroundImage:"linear-gradient("+"red"+","+ "#121212"+")"}}>
            </div>
            <h1>Good afternoon</h1>
            <div className="list">
                {recenltyPlayed.map(card=>(
                    <Card data={card.context.album}/>
                ))};
            </div>
            <h1>Popular Artists</h1>
            <div className="list">
                {cardData.map(card=>(
                    <Card type="artist" data={card}/>
                ))};
            </div>
            <h1>Popular Albums</h1>
            <div className="list">
                {cardData.map(card=>(
                    <Card type="artist" data={card}/>
                ))};
            </div>
            <div className="list">
                {cardData.map(card=>(
                    <Card type="artist" data={card}/>
                ))};
            </div>
        </div>
    )
}

export default Home
