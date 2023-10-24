import { Rating } from '@smastrom/react-rating';
import React from 'react';

const ShowReview = ({reviews}) => {
    const {name, email, productcode, model, rating, productreview, servicereview} = reviews;

    return (
        <div>
           <div className="card w-full h-full bg-base-100 shadow-xl my-5">
                <div className="card-body text-left">
                    <h2 className="card-title"> <span style={{color: '#212E52'}} className='font-bold' > {model} </span> </h2>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly  />
                    <p > <span className='font-bold'>Product Code: </span> {productcode} </p>
                    <p> <span className='font-bold' > Product Review: </span>   {productreview} </p>
                    <p> <span className='font-bold' > Service Review: </span> {servicereview} </p>
                    <p> <span className='font-bold' > Reviewed by: </span> <span className='text-primary'> {name} </span>  </p>
                </div>
            </div> 
        </div>
    );
};

export default ShowReview;