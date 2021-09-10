import React from 'react'
import './home.scss';

export default function Home() {
    return (
        <div className="home">
            {/* <h1>Good afternoon</h1> */}
            <div className="list">
                <div className="card">
                    <img src="https://newjams-images.scdn.co/v3/release-radar/ab6761610000e5eb3b2a1998ae37ecea4ab7c570/en/default" alt="pablo"/>
                    <p className="cardTitle">Release Radar</p>
                    <p className="cardDesc">fsdfsdfdsfdfsdfsdfdsfdfdfdfsdfsdfdsfdfdfsdfsdfdsfdfd</p> 
                </div>    
                <div className="card">
                    <img src="https://i.scdn.co/image/ab6761610000517403d5da55a275bb881afbe26c" alt="pablo"/> 
                    <p className="cardTitle">Release Radar</p>
                    <p className="cardDesc">fsdfsdfdsfdfsdfsdfdsfdfdfdfsdfsdfdsfdfdfsdfsdfdsfdfd</p> 
                </div>  
            </div>
            <div className="list">
                {/* <div className="card">
                    <img src="https://i.scdn.co/image/ab6761610000517403d5da55a275bb881afbe26c" alt="pablo"/> 
                </div>     */}
                <div className="card">
                    <img src="https://i.scdn.co/image/ab6761610000517403d5da55a275bb881afbe26c" alt="pablo"/> 
                    <p className="cardTitle">Release Radar</p>
                    <p className="cardDesc">fsdfsdfdsfdfsdfsdfdsfdfdfdfsdfsdfdsfdfdfsdfsdfdsfdfd</p> 
                </div>  
            </div>
        </div>
    )
}
