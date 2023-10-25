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
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > booking form </span> </p>
            </section>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-2 gap-4">
                <figure><img className='w-50 ' src={booking.img} alt="laptops" /></figure>
                <div className=" text-left mt-10">
                    <form className='px-2'>
                        {/* name */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input type="text" placeholder="Your Name"  name="name" className="input input-bordered w-full " required />
                        </div>

                        {/* email */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input type="email" placeholder="Your Email"  name="email" className="input input-bordered w-full " required />
                        </div>

                        {/* product code */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Product Code*</span>
                            </label>
                            <input type="number" placeholder="Product Code"  name="code" className="input input-bordered w-full " required />
                        </div>

                        {/* model */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Laptop Model*</span>
                            </label>
                            <input type="text" placeholder="Laptop Model"  name="name" className="input input-bordered w-full " required />
                        </div>

                        {/* price */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="text" placeholder="Price"  name="price" className="input input-bordered w-full " required />
                        </div>

                        {/* submit */}
                        <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> book Now </button>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default BookingPage;