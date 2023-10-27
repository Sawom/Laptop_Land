import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useCart from '../../../Hooks/useCart';
import useBooking from '../../../Hooks/useBooking';
import usePaymentHistory from '../../../Hooks/usePaymentHistory';

const UserHome = () => {
    const {user} = useAuth();
    const [cart, refetch] = useCart();
    const [booking] = useBooking();
    const [payments] = usePaymentHistory();

    const ctotal = cart.reduce((sum, item)=> item.price + sum, 0 )
    const btotal = booking.reduce((sum, item)=> item.price + sum, 0 )
    const transaction = payments.reduce((sum, item)=> item.price + sum, 0 )

    return (
        <div className='container mx-auto'>
           {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > user home </span> </p>
            </section>

            {/* user stats */}
            <div className="stats shadow place-items-center mx-5 gap-5">
                {/* order */}
                <div className="stat place-items-center">
                    <div className="stat-title font-semibold"> My Cart Product </div>
                    <div className="stat-value"> {cart.length} </div>
                </div>

                {/* cart price */}
                <div className="stat place-items-center">
                    <div className="stat-title font-semibold">  Total Cart Bill  </div>
                    <div className="stat-value text-secondary"> {ctotal} BDT </div>
                </div>

                {/* booking */}
                <div className="stat place-items-center">
                    <div className="stat-title font-semibold"> My Booking </div>
                    <div className="stat-value"> {booking.length} </div>
                </div>

                {/* booking price */}
                <div className="stat place-items-center">
                    <div className="stat-title font-semibold">  Total Booking Bill  </div>
                    <div className="stat-value text-secondary"> {btotal} BDT </div>
                </div>

                {/* transaction */}
                <div className="stat place-items-center">
                    <div className="stat-title font-semibold"> Total transaction </div>
                    <div className="stat-value"> {transaction} BDT </div>
                </div>

            </div>
            
        </div>
    );
};

export default UserHome;