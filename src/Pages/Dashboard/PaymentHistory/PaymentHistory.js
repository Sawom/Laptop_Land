import React from 'react';
import usePaymentHistory from '../../../Hooks/usePaymentHistory';
import useAuth from '../../Authentication/useAuth/useAuth';

const PaymentHistory = () => {
    const [payments, refetch] = usePaymentHistory();
    const {user} = useAuth();
    const total = payments.reduce((sum, item)=> item.price + sum, 0 )


    return (
        <div>
            {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > PAYMENT HISTORY </span> </p>
            </section>
            <div>
                <h3 className='text-xl'>  </h3>
            </div>
            PaymentHistory
            {total}
        </div>
    );
};

export default PaymentHistory;