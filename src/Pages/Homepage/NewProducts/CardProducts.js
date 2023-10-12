import React from 'react';

const CardProducts = ( {laptopInfo} ) => {
    const {model, brand, img, price, processor} = laptopInfo;

    return (
        <div className="card card-side w-full bg-base-100 shadow-2xl p-2">
            <figure><img className='w-full' src={img} alt="laptops" /></figure>
            <div className="card-body text-left ">
                <h2 className="card-title font-bold" style={{color: '#212E52'}} > {model} </h2>
                <p> Brand: {brand} </p>
                <p> Processor: {processor} </p>
                <p style={{color: '#212E52'}} className='font-bold'>Price: {price} BDT </p>
            </div>
        </div>
    );
};

export default CardProducts;