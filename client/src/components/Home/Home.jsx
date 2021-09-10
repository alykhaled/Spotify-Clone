import React from 'react'
import Card from '../Card/Card';
import './home.scss';

export default function Home() {
    return (
        <div className="home">
            {/* <h1>Good afternoon</h1> */}
            <div className="list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="list">
                <div className="card">
                    <img src="https://i.scdn.co/image/ab6761610000517403d5da55a275bb881afbe26c" alt="pablo"/> 
                    <p className="cardTitle">Release Radar</p>
                    <p className="cardDesc">fsdfsdfdsfdfsdfsdfdsfdfdfdfsdfsdfdsfdfdfsdfsdfdsfdfd</p> 
                </div>  
            </div>
        </div>
    )
}
