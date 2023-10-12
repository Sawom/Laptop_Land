import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useLaptops = () => {
    const{ data: laptop = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['laptop'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/laptop');
            return res.json();
        }
    })

    return [laptop, loading, refetch]
};

export default useLaptops;