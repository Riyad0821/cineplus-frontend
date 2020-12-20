import React, { useEffect, useState } from 'react';
import Data from '../../fakeData/Items';
import MoviesItems from '../MoviesItems/MoviesItems';
import logo from '../Icon/black.png';
import NavBar from '../Navbar/NavBar.js';

const Movies = () => {
    //const [movieItems] = useState(Data);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/movies')
        .then(res => res.json())
        .then(data => setMovies(data))
        }, [])

    return (
        <div className="container">
            <NavBar logo={logo} />
            <div className="service-container row p-5">   
                {
                    movies.map(item =>
                        <MoviesItems
                            className=""
                            item={item} key={item.id}></MoviesItems>)

                }
            </div>
        </div>
    );
};

export default Movies;