import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useCart from '../../../Hooks/useCart';
import useBooking from '../../../Hooks/useBooking';
import usePaymentHistory from '../../../Hooks/usePaymentHistory';
import userpic from '../../../images/gif/user.gif';

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
            <section className='text-center mb-5 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > user home </span> </p>
            </section>

            {/* user hello */}
            <div className="hero flex mb-5">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <img src={userpic} alt='userdemo' className="max-w-sm rounded-lg " />
                    <div>
                    <h1 className="text-xl font-bold"> Welcome <span className='text-primary'> {user.displayName}! </span>  </h1>
                    </div>
                </div>
            </div>

            {/* user stats */}
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow place-items-center gap-5 mb-5">
                {/* order */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold"> My Cart Product </div>
                    <div className="stat-value"> {cart.length} </div>
                </div>

                {/* cart price */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">  Total Cart Bill  </div>
                    <div className="stat-value text-secondary"> {ctotal} BDT </div>
                </div>

                {/* booking */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold"> My Booking </div>
                    <div className="stat-value"> {booking.length} </div>
                </div>

                {/* booking price */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">  Total Booking Bill  </div>
                    <div className="stat-value text-secondary"> {btotal} BDT </div>
                </div>

                {/* transaction */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold"> Total transaction </div>
                    <div className="stat-value"> {transaction} BDT </div>
                </div>

            </div>
            
        </div>
    );
};

export default UserHome;