import React from 'react'
import { useEffect,useState } from 'react';
import Card from '../Card/Card';
import './home.scss';
import axios from "axios";

function Home() {
    const [cardData,setRes] = useState();
    useEffect(() => {
        const getArtist = async () => 
        {
            try {
                const res = await axios.get("/user/find/613a2f8203484c60536f588c",{
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNhMmY4MjAzNDg0YzYwNTM2ZjU4OGMiLCJpYXQiOjE2MzEyOTU4NjB9.JGM8D1NVRFuCZ0lRPo9uaxa2raCe6PCGIjcd11-oI_4",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                        "Access-Control-Allow-Headers" : "Origin, Content-Type, X-Auth-Token",
                    }
                });
                console.log(res);
                setRes(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getArtist();
    }, []);
    return (
        <div className="home">
            <h1>Good afternoon</h1>
            <div className="list">
                <Card data={cardData}/>
                <Card />
                <Card />
                <Card />
            </div>
            <h1>Popular Artists</h1>
            <div className="list">
                <Card type="artist"/>
                <Card type="artist"/>
                <Card type="artist"/>
                <Card type="artist"/>
            </div>
            <h1>Popular Albums</h1>
            <div className="list">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="list">
                <Card type="artist"/>
                <Card type="artist"/>
                <Card type="artist"/>
                <Card type="artist"/>
            </div>
        </div>
    )
}

export default Home
