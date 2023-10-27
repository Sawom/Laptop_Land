import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe('pk_test_51NqqVXFuox1PcYmePurXvgt6Saxxv1WTLGB6BslIGvnEXckTT3KGAEJR6DDAX6mfTtKROZTdUfUykpjSa8kXNUTY00AOpwN21d')

const Payment = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum,item) => sum + item.price , 0 );
    const price = parseFloat(total.toFixed(2))

    return (
        <div  className='container mx-auto'>
            {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > PAYMENT here </span> </p>
            </section>

            <Elements stripe={stripePromise} >
                <CheckoutForm cart={cart} refetch={refetch} price={total} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;