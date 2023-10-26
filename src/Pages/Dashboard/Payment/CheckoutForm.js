import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import {FaDollarSign} from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../Authentication/useAuth/useAuth';

const CheckoutForm = ({price, refetch, cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])

    // submit card
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
            return
        }
        else {
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            return;
        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                laptopItems: cart.map(item => item.laptopId),
                status: 'service pending',
                laptopNames: cart.map(item => item.model)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                    }
                })
        }
    }

    return (
        <div>
             <form className="w-2/3 m-8 overflow-x-auto" onSubmit={handleSubmit}>
                <CardElement 
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                required > </CardElement>
                <button className='btn px-5 mt-6 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ' type="submit" disabled={!stripe || !clientSecret || processing}>
                    <FaDollarSign></FaDollarSign> Pay
                </button>
            </form> 

            {/* show error */}
            {cardError && <p className='text-red-600 ml-8'> {cardError} </p> }
            {transactionId && <p className='text-green-500'> Transaction complete with transactionId: {transactionId} </p> }
        </div>
    );
};

export default CheckoutForm;