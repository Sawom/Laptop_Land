import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const {id} = useParams();
    const [booking, setBooking] = useState({})

     useEffect( ()=>{
        fetch(`http://localhost:5000/laptop/${id}`)
        .then(data => data.json())
        .then(data => setBooking(data));
    } , [])

    return (
        <div className='container mx-auto'>
            code: {booking.code}
        </div>
    );
};

export default BookingPage;