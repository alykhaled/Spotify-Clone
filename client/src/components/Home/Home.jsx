import React from 'react'
import { useEffect,useState } from 'react';
import Card from '../Card/Card';
import './home.scss';
import axios from "axios";
const dotenv = require('dotenv');

function Home() {
    dotenv.config();
    const [cardData,setRes] = useState([]);
    useEffect(() => {

        const getArtists = async () => 
        {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get("/artist/top",{
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNhMmY4MjAzNDg0YzYwNTM2ZjU4OGMiLCJpYXQiOjE2MzEyOTU4NjB9.JGM8D1NVRFuCZ0lRPo9uaxa2raCe6PCGIjcd11-oI_4",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                        "Access-Control-Allow-Headers" : "Origin, Content-Type, X-Auth-Token",
                    }
                });
                setRes(res.data);
                console.log(cardData);
            } catch (error) {
                console.log(error);
            }
        };
        getArtists();
    }, [cardData]);
    return (
        <div className="home">
            <h1>Good afternoon</h1>
            <div className="list">
                {cardData.map(card=>(
                    <Card type="artist" data={card}/>
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
