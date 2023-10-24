import React, { useState } from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import {AiFillFolderAdd} from 'react-icons/ai';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddReviews = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    // post review
    const onSubmit = (data) =>{
        const formData = new FormData()
        
        .then(res => res.json())
        .then(dataResponse =>{
            if(dataResponse.success){
                const{name, email, productcode, model, rating, productreview, servicereview} = data;
                axiosSecure.post('/homereview',data)
                .then(data =>{
                    if(data.data.insertedId){
                        Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Thanks for review',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                })
            }
            
            
        })
    }

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 mt-5' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > give a review </span> </p>
            </section>
            {/* review form */}
            <form className='px-5' onSubmit={handleSubmit(onSubmit)}>
                    {/* 1. name */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Name*</span>
                        </label>
                        <input type="text" placeholder="Your Name" disabled defaultValue={user.displayName} {...register("name", { required: true })}  className="input input-bordered w-full " />
                    </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3'>
                    {/* 2. email */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input type="email" placeholder="Email" disabled defaultValue={user.email} {...register("email", { required: true })}   className="input input-bordered w-full " />
                    </div>

                    {/* 3. productcode */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Product Code*</span>
                        </label>
                        <input type="number" placeholder="Product Serial No" {...register("productcode", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 4. model */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Product Model*</span>
                        </label>
                        <input type="text" placeholder="Product model" {...register("model", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 5. rating */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Ratings*</span>
                        </label>
                        <input type="number" placeholder="put a number from 1-5" {...register("rating", { required: true })}  className="input input-bordered w-full " />
                    </div>

                </div>

                {/* 6. product review */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Product Review*</span>
                        </label>
                        <textarea type="text" placeholder="Product Review" {...register("productreview", { required: true })}  className="textarea textarea-bordered h-24 w-full " />
                    </div>

                {/* 7. service review */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Service Review*</span>
                        </label>
                        <textarea type="text" placeholder="Service Review" {...register("servicereview", { required: true })}  className="textarea textarea-bordered h-24 w-full " />
                    </div>

                    {/* submit button */}
                <button style={{backgroundColor: '#212E52'}}  className="btn px-5 mt-2 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md"  type="submit"> <AiFillFolderAdd></AiFillFolderAdd> Add Review </button>
            </form>

        </div>
    );
};

export default AddReviews;