import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    
    queryFn: async() =>{
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        return res.data;
     },
  })

    return [cart, refetch]
};

export default useCart;