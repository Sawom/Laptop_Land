import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useAuth();
    const token = localStorage.getItem('access-token');
    

    const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled : !loading,
    
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, 
        {
            headers: {authorization: `bearer ${token}`}
        })
        return res.json();
     },
  })

    return [cart, refetch]
};

export default useCart;