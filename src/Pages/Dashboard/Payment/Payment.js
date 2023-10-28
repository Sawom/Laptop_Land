import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';
import card from '../../../images/gif/card.gif';

const stripePromise = loadStripe('pk_test_51NqqVXFuox1PcYmePurXvgt6Saxxv1WTLGB6BslIGvnEXckTT3KGAEJR6DDAX6mfTtKROZTdUfUykpjSa8kXNUTY00AOpwN21d')

const Payment = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum,item) => sum + item.price , 0 );
    const price = parseFloat(total.toFixed(2))

    return (
        <div  className='container mx-auto p-4'>
            {/* heading */}
            <section className='text-center mb-5 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > PAYMENT here </span> </p>
            </section>

            {/* card gif */}
            <div className="hero  flex mb-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={card} alt='userdemo' className="max-w-xs rounded-lg " />
                    {/* list */}
                    <div>
                        <ul className='font-semibold'>
                            <li>Our Payment method is secure.</li>
                            <li>Multi-Factor Authentication (MFA). </li>
                            <li>Regular Security Audits.</li>
                            <li>Strong Encryption and Tokenization.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Elements stripe={stripePromise} >
                <CheckoutForm cart={cart} refetch={refetch} price={total} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;