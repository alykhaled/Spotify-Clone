import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss';
export default function Card({type,data}) {
    return (
        <div className="card">           
            <Link to={"/artist/" + data.username}>
                <img className={type} src={data.profileImage} alt="pablo"/>
                <p className="cardTitle">{data.name}</p>
                <p className="cardDesc">{data.email}</p> 
            </Link>
        </div>
    )
}
