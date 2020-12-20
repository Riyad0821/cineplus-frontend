import React from 'react';
import './Header.css';
import poster from '../../images/poster.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row ">
            <div className="col-md-6 p-5">
                <h4 style = {{color: '#0D052E' , fontSize: '45px' , fontWeight: '800'}} className="font-weight-bold text-center">Enjoy Your Favorite Movies!</h4>
                <Link to="/movies"><button className="btn btn-primary">Book Ticket</button></Link>
            </div>
            <div className="col-md-6 p-5 poster">
            <img height="300" width="500" src={poster} alt=""/>
            </div>           
        </div>
    );
};

export default Header;