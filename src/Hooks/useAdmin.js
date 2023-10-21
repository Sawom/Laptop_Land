import React from 'react';
import useAuth from '../Pages/Authentication/useAuth/useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, refetch, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
            // refetch();
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;