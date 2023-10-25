import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const BookingPage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset } = useForm();

    // data loading
    useEffect( ()=>{
        fetch(`http://localhost:5000/laptop/${id}`)
        .then(data => data.json())
        .then(data => setBooking(data));
    } , [])

    // add booking
    const onSubmit = (data) =>{
        const formData = new FormData();
        const {name, email, address, code, model, price} = data;
        const newData = {name, email, address, code, model,price: parseFloat(price)}

        axios.post('http://localhost:5000/booking',newData)
        .then(data =>{
            if(data.data.insertedId){
                // reset();
                Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added successfully!',
                            showConfirmButton: false,
                            timer: 1500
                    })
            }
        })
    }

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > booking form </span> </p>
            </section>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-3 gap-4">
                <div>
                    <figure><img className='w-50 ' src={booking.img} alt="laptops" /></figure>
                </div>
                
                <div className=" text-left mt-10">
                    <form className='px-2' onSubmit={handleSubmit(onSubmit)} >
                        {/* 1. name */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} readOnly defaultValue={user.displayName}  placeholder="Your Name" name='name'  className="input input-bordered w-full " />
                        </div>

                        {/* 2. email */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} readOnly defaultValue={user.email}  placeholder="Your Email"  name="email" className="input input-bordered w-full "  />
                        </div>

                        {/* 3. address */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Address*</span>
                            </label>
                            <input type="text" {...register("address", { required: true })} defaultValue={''}  placeholder="Your Address" name="address" className="input input-bordered w-full "  />
                        </div>

                        {/* 4. product code */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Product Code*</span>
                            </label>
                            <input type="number" {...register("code", { required: true })} readOnly defaultValue={booking.code}  placeholder="Product Code"  name="code"  className="input input-bordered w-full "  />
                        </div>

                        {/* 5. model */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Laptop Model*</span>
                            </label>
                            <input type="text" {...register("model", { required: true })} readOnly defaultValue={booking.model}  placeholder="Laptop Model"  name="model" className="input input-bordered w-full " />
                        </div>

                        {/* 6. price */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Price (BDT)*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} readOnly defaultValue={booking.price} placeholder="Price"  name="price" className="input input-bordered w-full "  />
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