import React from 'react';
import './Header.css';
import poster from '../../images/poster.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row ">
            <div className="col-md-6 p-5">
                <h4>Enjoy Your Favorite Movies!</h4>
                <Link to="/movies"><button className="btn btn-primary">Book Ticket</button></Link>
            </div>
            <div className="col-md-6 p-5">
            <img height="400" width="600" src={poster} alt=""/>
            </div>           
        </div>
    );
};

export default Header;