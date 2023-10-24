import React, { useEffect, useState } from 'react';
import Cbanner from './Cbanner';
import ShowReview from './ShowReview';

const CustomerReview = () => {
    const [allreview , setAllreview] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/homereview')
        .then( res => res.json() )
        .then(data =>{
            setAllreview(data);
            } )
    }, [] )

    return (
        <div className=''>
            <Cbanner></Cbanner>
            <div className='container mx-auto'>
                {/* search */}
                <div className='text-center mt-10' >
                <input type="text" placeholder="Search by product code or model"  className="input input-bordered border-2 w-full text-center  " />
                </div>
                <br />
                {/* show all reviews */}
                <div className='gap-5 my-10' >
                    {
                        allreview.map( (reviews)=> <ShowReview
                            reviews={reviews} key={reviews._id}
                        ></ShowReview> )
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;