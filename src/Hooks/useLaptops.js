import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useLaptops = () => {
    const{ data: laptop = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['laptop'],
        queryFn: async() =>{
            const res = await fetch('https://laptoplanddb-production.up.railway.app/laptop');
            return res.json();
        }
    })

    return [laptop, loading, refetch]
};

export default useLaptops;