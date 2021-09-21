import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss';
export default function Card({type,data}) {
    return (
        <Link to={(type === "artist" ?  "/artist/" : "/album/") + data._id}>
            <div className="card">           
                <img className={type} src={type === "artist" ? data.profileImage : data.image} alt="pablo"/>
                <p className="cardTitle">{data.name}</p>
                <p className="cardDesc">{data.year + " • Album"}</p> 
            </div>
        </Link>
    )
}
