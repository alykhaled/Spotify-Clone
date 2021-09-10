import React from 'react'
import Card from '../Card/Card';
import './home.scss';

export class Home extends React.Component {
    render() {
        {/* <div className="card">
            <img src="https://i.scdn.co/image/ab6761610000517403d5da55a275bb881afbe26c" alt="pablo"/> 
            <p className="cardTitle">Release Radar</p>
            <p className="cardDesc">fsdfsdfdsfdfsdfsdfdsfdfdfdfsdfsdfdsfdfdfsdfsdfdsfdfd</p> 
        </div>   */}
        return (
            <div className="home">
                <h1>Good afternoon</h1>
                <div className="list">
                    <Card />
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
}

export default Home
