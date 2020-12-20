import React, { useEffect, useState } from 'react';
import Data from '../../fakeData/Items';
import MoviesItems from '../MoviesItems/MoviesItems';

const Movies = () => {
    const [movieItems] = useState(Data);
    return (
        <div className="service-container row p-5">
            {
                movieItems.map(item =>
                    <MoviesItems
                        className=""
                        item={item} key={item.id}></MoviesItems>)

            }
        </div>
    );
};

export default Movies;