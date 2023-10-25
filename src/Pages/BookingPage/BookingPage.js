import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';

const BookingPage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [booking, setBooking] = useState({});

    const [bookingLaptop, setBookinglaptop] = useState({});

    // data loading
    useEffect( ()=>{
        fetch(`http://localhost:5000/laptop/${id}`)
        .then(data => data.json())
        .then(data => setBooking(data));
    } , [])

    // take input data from form
    const handleInputData = (event) =>{
        const field = event.target.defaultValue;
        const value = event.target.value;
        const newBooking = {...bookingLaptop};
        newBooking[field] = value;
        setBookinglaptop(newBooking);
    } 

    // add booking
    const handleBooking = (event) =>{
        event.preventDefault();
        fetch('http://localhost:5000/booking', {
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingLaptop)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Booking Confirm!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                // event.target.reset();    
            }
        })
    }

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > booking form </span> </p>
            </section>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-3 gap-4">
                <figure><img className='w-50 ' src={booking.img} alt="laptops" /></figure>
                <div className=" text-left mt-10">
                    <form className='px-2' onSubmit={handleBooking} >
                        {/* 1. name */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input type="text"  onChange={handleInputData} placeholder="Your Name" defaultValue={user.displayName}  name="name" className="input input-bordered w-full " required />
                        </div>

                        {/* 2. email */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input type="email" onChange={handleInputData} placeholder="Your Email"  name="email" defaultValue={user.email} className="input input-bordered w-full " required />
                        </div>

                        {/* 3. address */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Address*</span>
                            </label>
                            <input type="text" onChange={handleInputData} placeholder="Your Address" defaultValue={''}  name="name" className="input input-bordered w-full " required />
                        </div>

                        {/* 4. product code */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Product Code*</span>
                            </label>
                            <input type="number" onChange={handleInputData} placeholder="Product Code"  name="code" defaultValue={booking.code} className="input input-bordered w-full " required />
                        </div>

                        {/* 5. model */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Laptop Model*</span>
                            </label>
                            <input type="text" onChange={handleInputData} placeholder="Laptop Model"  name="name" defaultValue={booking.model} className="input input-bordered w-full " required />
                        </div>

                        {/* 6. price */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Price (BDT)*</span>
                            </label>
                            <input type="text" onChange={handleInputData} placeholder="Price"  name="price" defaultValue={booking.price} className="input input-bordered w-full " required />
                        </div>

                        {/* submit button */}
                        <button style={{backgroundColor: '#212E52'}} className="btn px-5  text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> book Now </button>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default BookingPage;