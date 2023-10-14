import React from 'react';
import './TermBanner.css';

const TermBanner = () => {
    return (
        <div>
            <div className="hero lg:h-[400px] md:h-[300px] h-[200px] termbanner" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md  ">
                        <h1 className="mb-10 lg:text-4xl md:text-3xl text-2xl font-bold "> Terms and Conditions </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermBanner;