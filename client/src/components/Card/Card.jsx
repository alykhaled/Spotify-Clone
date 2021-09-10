import React from 'react'
import './card.scss';

export default function Card({type,data}) {
    return (
        <div className="card">           
            <img className={type === "artist" ? "artist" : ""} src={type === "artist" ? "https://i.scdn.co/image/ab6761610000517403d5da55a275bb881afbe26c" : "https://newjams-images.scdn.co/v3/release-radar/ab6761610000e5eb3b2a1998ae37ecea4ab7c570/en/default"} alt="pablo"/>
            <p className="cardTitle">{data ? data.username : ""}</p>
            <p className="cardDesc">{data ? data.email : ""}</p> 
        </div>
    )
}
