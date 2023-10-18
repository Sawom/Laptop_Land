import React from 'react';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';
import { Link, Outlet } from 'react-router-dom';

const DashboardPage = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div className='overflow-x-auto h-full' >
            <div className="drawer lg:drawer-open md:drawer-open drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden  md:hidden hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side bg-[#212E52]">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-2 w-auto min-h-full  text-base-content">
                    {/* Sidebar content here */}
                    <li className='font-bold'> <Link to='/home'> <span className='text-white' > Home </span> </Link> </li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;