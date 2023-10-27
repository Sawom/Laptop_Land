import React from 'react';
import usePaymentHistory from '../../../Hooks/usePaymentHistory';
import useAuth from '../../Authentication/useAuth/useAuth';

const PaymentHistory = () => {
    const [payments, refetch] = usePaymentHistory();
    const {user} = useAuth();
    const total = payments.reduce((sum, item)=> item.price + sum, 0 )


    return (
        <div className='container mx-auto'>
            {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > PAYMENT HISTORY </span> </p>
            </section>
            <div className='font-semibold '>
                <h3 className='text-xl' > Total payment: <span className='text-blue-600'> {payments.length} </span> </h3>
                <h3 className='text-xl' > total transaction: <span className='text-blue-600'>  {total} BDT </span> </h3>
            </div>
            
            {/* table */}
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Laptop Models</th>
                            <th>Bill</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((pay, index) => <tr key={pay._id} >
                                {/* index */}
                                <td>
                                    {index + 1}
                                </td>
                                {/* email */}
                                <td>
                                    {pay.email}
                                </td>
                                {/* quantity */}
                                <td className="">{pay.quantity} </td>
                                {/* laptop models */}
                                <td >
                                    <p> {pay.laptopNames} </p>
                                </td>
                                {/* bill */}
                                <td>
                                    <p> {pay.price} BDT </p>
                                </td>
                                {/* t id */}
                                <td> 
                                    {pay.transactionId} 
                                </td>
                                {/* status */}
                                <td>
                                    <span className='font-semibold text-success'> {pay.status} </span> 
                                </td>
                                {/* date */}
                                <td>
                                    {pay.date}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default PaymentHistory;