import React from 'react';

const CardProducts = ( {laptopInfo} ) => {
    const {model, brand, img, price, processor} = laptopInfo;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-2xl">
            <figure><img className='w-full' src={img} alt="laptops" /></figure>
            <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > {price} BDT </p>
            <div className="card-body text-left ">
                <h2 className="card-title font-bold" style={{color: '#212E52'}} > {model} </h2>
                <p className='text-xl'> Brand: {brand} </p>
                <p className='text-xl'> processor: {processor} </p>
                    <button style={{backgroundColor: '#212E52'}} className="btn mt-5 text-white btn-outline btn-active btn-xs sm:btn-sm md:btn-md lg:btn-md "> Book now </button>
            </div>
        </div>
    );
};

export default CardProducts;