import React from 'react';
import './Cbanner.css'

const Cbanner = () => {
    return (
        <div className="hero lg:h-[400px] md:h-[300px] h-[200px] cbanner" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md  ">
                        <h1 className="mb-10 lg:text-4xl md:text-3xl text-2xl font-bold "> Customers Reviews </h1>
                    </div>
                </div>
        </div>
    );
};

export default Cbanner;