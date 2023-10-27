import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // data load
    const {data: stats = {} } = useQuery({
        queryKey : ['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    return (
        <div className='container mx-auto p-5'>
            {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > admin home </span> </p>
            </section>
            <p>Welcome <span className='font-semibold text-primary'> {user.displayName} </span> to Admin Home! </p>
            
            {/* stats */}
            <div className="stats shadow overflow-x-auto">
                {/* revenue */}
                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value"> {stats.revenue} BDT </div>
                </div>

                {/* users */}
                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary"> {stats.users} person</div>
                </div>

                {/* products */}
                <div className="stat place-items-center">
                    <div className="stat-title">Products</div>
                    <div className="stat-value"> {stats.products} </div>
                </div>
                
                {/* orders */}
                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value"> {stats.orders} </div>
                </div>

                {/* booking */}
                <div className="stat place-items-center">
                    <div className="stat-title">Booking</div>
                    <div className="stat-value"> {stats.booking} </div>
                </div>
            
            </div>

        </div>
    );
};

export default AdminHome;