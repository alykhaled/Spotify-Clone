import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss';
export default function Card({type,data}) {
    console.log(data);
    return (
        <div className="card">           
            <Link to={"/artist/" + data._id}>
                <img className={type} src={type === "artist" ? data.profileImage : data.image} alt="pablo"/>
                <p className="cardTitle">{data.name}</p>
                <p className="cardDesc">{data.year + " • Album"}</p> 
            </Link>
        </div>
    )
}
