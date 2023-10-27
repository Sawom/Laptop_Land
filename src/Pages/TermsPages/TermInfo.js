import React from 'react';

const TermInfo = ({termsinfo}) => {
    const{acceptance, info, pricing, orderr, returnn, warranty, limitation, privacy, intellectual, law, warranty1, warranty2, warranty3} = termsinfo;

    return (
        <div >
            <div className='container p-5 my-5 shadow-xl bg-base-100 mx-auto'>
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Acceptance of Terms</p>
                <p> {acceptance} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Product Information</p>
                <p> {info} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Pricing and Payment</p>
                <p> {pricing} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Order Processing and Shipping</p>
                <p> {orderr} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Returns and Exchanges</p>
                <p> {returnn} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Warranty</p>
                <p> {warranty} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Limitation of Liability</p>
                <p> {limitation} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Privacy Policy</p>
                <p> {privacy} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Intellectual Property</p>
                <p> {intellectual} </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Governing Law</p>
                <p> {law} </p>
            </div>
            {/* about warranty*/}
            <div className='container p-5 my-5 shadow-xl bg-base-100 mx-auto'>
                <p className='lg:text-2xl md:text-2xl text-xl' > <span className='font-bold'>Warranty Information</span>  <small> (read carefully) </small> </p>
                <br />
                <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Manufacturer's Warranty</p>
                <p > {warranty1} </p>
                <br />
                <p > {warranty2} </p>
                <p> {warranty3} </p>
            </div>
            
        </div>
    );
};

export default TermInfo;