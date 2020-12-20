import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const BookingCard = ({ data }) => {
    const { id } = data;
    const [status, setStatus ] = useState(false);
    const history = useHistory();
    const { movieName } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div onClick={() => {
            setStatus(true);
            
        }} style={{ backgroundColor: status ? 'red':'green'}} class="card col-md-2 text-center text-white m-3">
            <h1>{id} </h1>
        </div>
    );
};

export default BookingCard;