import React from 'react';
import './MoviesItems.css';
import { Link, useHistory } from 'react-router-dom';

const MoviesItems = (props) => {
    const { movieName, date, time, img, bgColor } = props.item;
    const history = useHistory();
    const handleAddService = (movieName) => {
        history.push(`/booking/${movieName}`);
    }
    //console.log(serviceType, img);
    return (
        <div className="cardd service-items" onClick={() => handleAddService(movieName)} style={{
            backgroundImage: `url(${(img)})`
        }}>
            <div className="item-title" style={{
                    backgroundColor: `${(bgColor)}`
                }}>
                <h3 >{movieName}</h3>
                <p>Date: {date}</p>
                <p>Show Time: {time}</p>
            </div>
        </div>
    );
};

export default MoviesItems;