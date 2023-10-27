import React from 'react';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

const usePaymentHistory = () => {
    const {user, loading} = useAuth();

    // load payment history data
    const {refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/payments?email=${user?.email}`)
            return res.json();
        }
    })

    return [payments, refetch];

    
};

export default usePaymentHistory;