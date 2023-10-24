import React, { useState } from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import {AiFillFolderAdd} from 'react-icons/ai';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddReviews = () => {
    const {user} = useAuth();

    const [review, setReview] = useState({});

    // take input data from form
    const handleInput = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }

    // add review
    const handleReview = (event)=>{
        event.preventDefault();
        fetch('http://localhost:5000/homereview', {
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thanks for review!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                // event.target.reset();
            }
        })
    }

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 mt-5' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > give a review </span> </p>
            </section>
            <p> Use your name : <span className='text-primary'>{user.displayName}</span>  and email: <span className='text-primary' >{user.email}</span> </p>
            {/* review form */}
            <form className='px-5' onSubmit={handleReview}>
                    {/* 1. name */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Name*</span>
                        </label>
                        <input type="text" onChange={handleInput} placeholder="Your Name"  name="name" className="input input-bordered w-full " required />
                    </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3'>
                    {/* 2. email */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input type="email" onChange={handleInput} placeholder="Email"  name="email" className="input input-bordered w-full " required />
                    </div>

                    {/* 3. productcode */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Product Code*</span>
                        </label>
                        <input type="number" onChange={handleInput} name="productcode" placeholder="Product Code" className="input input-bordered w-full " required />
                    </div>

                    {/* 4. model */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Product Model*</span>
                        </label>
                        <input type="text" onChange={handleInput} placeholder="Product model" name="model"  className="input input-bordered w-full " required />
                    </div>

                    {/* 5. rating */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Ratings*</span>
                        </label>
                        <input type="number" onChange={handleInput} placeholder="put a number from 1-5" name="rating"  className="input input-bordered w-full " required />
                    </div>

                </div>

                {/* 6. product review */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Product Review*</span>
                        </label>
                        <textarea type="text" onChange={handleInput} placeholder="Product Review" name="productreview"  className="textarea textarea-bordered h-24 w-full " required />
                    </div>

                {/* 7. service review */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Service Review*</span>
                        </label>
                        <textarea type="text" onChange={handleInput} placeholder="Service Review" name="servicereview"  className="textarea textarea-bordered h-24 w-full " required />
                    </div>

                    {/* submit button */}
                <button style={{backgroundColor: '#212E52'}}  className="btn px-5 mt-2 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md"  type="submit"> <AiFillFolderAdd></AiFillFolderAdd> Add Review </button>
            </form>

        </div>
    );
};

export default AddReviews;