import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className="hero h-[500px] banner" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md  ">
                        <h1 className="mb-10 lg:text-4xl md:text-3xl text-2xl font-bold ">24/7 Support </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;