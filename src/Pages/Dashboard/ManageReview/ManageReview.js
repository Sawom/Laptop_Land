import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Rating } from '@smastrom/react-rating';
import { FaTrashAlt } from 'react-icons/fa';

const ManageReview = () => {
    const [axiosSecure] = useAxiosSecure();

    // load reviews
    const {data: homereview = [], refetch } = useQuery(['homereview'] , async()=>{
        const res = await axiosSecure.get('/homereview')
        return res.data;
    } )

    // delete review
    const handleDeleteReview = (review) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result)=>{
            if(result.isConfirmed){
                axiosSecure.delete(`/homereview/${review._id}`)
                .then( res =>{
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Review has deleted!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                } )
            }
        } )
    }

    return (
        <div className='container mx-auto px-5'>
            <h3 className='text-2xl font-semibold '> Total Reviews: {homereview.length} </h3>

            {/* show reviews */}
            <div>
                {
                    homereview.map( (review) => <div key={review._id} className="card w-full bg-base-100 shadow-xl my-5">
                        <div className="card-body text-left">
                            <h2 className="card-title"> {review.model} </h2>
                            <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly  />
                            <p > <span className='font-bold'>Product Code: </span> {review.productcode} </p>
                            <p> <span className='font-bold' > Product Review: </span>   {review.productreview} </p>
                            <p> <span className='font-bold' > Service Review: </span> {review.servicereview} </p>
                            <p> <span className='font-bold' > Reviewed by: </span> <span className='text-primary'> {review.name} </span>  </p>
                            <p> <span className='font-bold' > User Email: </span> <span className='text-primary'> {review.email} </span>  </p>

                            <div className="card-actions justify-end">
                                <button onClick={() => handleDeleteReview(review)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default ManageReview;