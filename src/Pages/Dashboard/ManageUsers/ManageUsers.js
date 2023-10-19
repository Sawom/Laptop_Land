import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: users= [], refetch } = useQuery(['users'] , async () =>{
        const res = await axiosSecure.get('/users')
        return res.data ;
    })

    return (
        <div>
            
        </div>
    );
};

export default ManageUsers;