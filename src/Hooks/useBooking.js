import React from 'react';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {
    const {user, loading} = useAuth();

    const {refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`https://laptoplanddb-production.up.railway.app/booking?email=${user?.email}`)
            return res.json();
        }
    })

    return [booking, refetch]
};

export default useBooking;