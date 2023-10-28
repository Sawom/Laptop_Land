import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import demoadmin from '../../../images/gif/admin.gif';

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

            {/* user hello */}
            <div className="hero flex mb-5">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <img src={demoadmin} alt='userdemo' className="max-w-xs rounded-lg " />
                    <div>
                        <h1 className="text-xl font-bold"> Welcome <span className='text-primary'> {user.displayName}  </span> to Admin Dashboard! </h1>
                    </div>
                </div>
            </div>
            
            {/* admin stats */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow place-items-center gap-5 mb-5">
                {/* revenue */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Revenue</div>
                    <div className="stat-value"> {stats.revenue} BDT </div>
                </div>

                {/* users */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Users</div>
                    <div className="stat-value text-secondary"> {stats.users} person</div>
                </div>

                {/* products */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Products</div>
                    <div className="stat-value"> {stats.products} </div>
                </div>
                
                {/* orders */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Orders</div>
                    <div className="stat-value"> {stats.orders} </div>
                </div>

                {/* booking */}
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Booking</div>
                    <div className="stat-value"> {stats.booking} </div>
                </div>
            
            </div>

        </div>
    );
};

export default AdminHome;