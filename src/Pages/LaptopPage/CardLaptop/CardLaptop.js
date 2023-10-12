import React from 'react';

const CardLaptop = ({laptopdata}) => {
    const {model, brand, img, price, processor, ram, ramtype, display, code } = laptopdata;

    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-2xl px-2">
            <figure><img className='w-full' src={img} alt="laptops" /></figure>
             <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > {price} BDT </p>
            <div className="card-body text-left ">
                <h2 className="card-title font-bold" style={{color: '#212E52'}} > {model} </h2>
                <p> Product code: {code} </p>
                <p> Brand: {brand} </p>
                <p> Processor: {processor} </p>
                <p> Ram: {ram} </p>
                <p> Display: {display} </p>
                
                    <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-2 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">book now</button>
                    <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-2 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">add to cart</button>
                    <button style={{backgroundColor: '#004600'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">View details</button>
                
            </div>
        </div>
        </div>
    );
};

export default CardLaptop;