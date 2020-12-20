import React from 'react';
import { useState } from 'react';
import logo from '../Icon/black.png';
import NavBar from '../Navbar/NavBar';
import BookingCard from '../BookingCard/BookingCard';
//import bookingData from '../../fakeData/BookList';
import { useParams } from 'react-router-dom';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        status: false
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        status: false
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        status: false
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        status: false
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e4',
        id: 7,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e5',
        id: 8,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e6',
        id: 9,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e7',
        id: 10,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e8',
        id: 11,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e9',
        id: 12,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e10',
        id: 13,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e11',
        id: 14,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e12',
        id: 15,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e13',
        id: 16,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e14',
        id: 17,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e15',
        id: 18,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e16',
        id: 19,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e17',
        id: 20,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e18',
        id: 21,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e19',
        id: 22,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e20',
        id: 23,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e21',
        id: 24,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e22',
        id: 25,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e23',
        id: 26,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e24',
        id: 27,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e25',
        id: 28,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e26',
        id: 29,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e27',
        id: 30,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e28',
        id: 31,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e29',
        id: 32,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e30',
        id: 33,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e31',
        id: 34,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e32',
        id: 35,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e33',
        id: 36,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e34',
        id: 37,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e35',
        id: 38,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e36',
        id: 39,
        status: false
    },
    {
        _id: '5e8df6a0e6e8231764dc23e37',
        id: 40,
        status: false
    }
]

const Booking = () => {
    const [booking] = useState(bookingData);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    const movieName = useParams();
    return (
        <div className="container">
            <NavBar logo={logo} />
            <h3 className="text-center" style={{color: 'orange'}}>Book Your Seat(s)</h3>
            <div className="row"> 
                {
                    bookingData.map(data => <BookingCard data={data} key={data.id}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Booking;