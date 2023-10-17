import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardLaptop = ({laptopdata}) => {
    const { _id, model, brand, img, price,  code } = laptopdata;

    let navigate = useNavigate();
    // dynamic route url
    const url = `/laptopinfo/${_id}` ;
    const handleView = ()=>{
        navigate(url);
    }

    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-2xl px-2">
            <figure><img className='w-full' src={img} alt="laptops" /></figure>
             <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > {price} BDT </p>
            <div className="card-body text-left ">
                <h2 className="card-title font-bold" style={{color: '#212E52'}} > {model} </h2>
                <p> Product code: {code} </p>
                <p> Brand: {brand} </p>
                <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">add to cart</button>
                <button onClick={handleView}  style={{backgroundColor: '#212E52'}} className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">View details</button>
                
            </div>
        </div>
        </div>
    );
};

export default CardLaptop;