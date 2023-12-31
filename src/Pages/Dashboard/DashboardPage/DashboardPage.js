import React from 'react';
import { FaShoppingCart, FaWallet, FaHome, FaUtensils, FaUsers } from 'react-icons/fa';
import {AiFillShopping} from 'react-icons/ai';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';
import { Link, Outlet } from 'react-router-dom';
import useBooking from '../../../Hooks/useBooking';
import {MdOutlineRateReview} from 'react-icons/md';
import {BiLaptop} from 'react-icons/bi';
import {FaLaptopMedical, FaLaptopHouse} from 'react-icons/fa';

const DashboardPage = () => {
    const [cart] = useCart();
    const [booking] = useBooking();
    const [isAdmin] = useAdmin();

    return (
        <div className='overflow-x-auto mt-10' >
            <div className="drawer lg:drawer-open md:drawer-open drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden  md:hidden hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side bg-[#008080] h-full">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-2 w-auto min-h-full mt-5 text-base-content">
                    {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                {/* admin */} 
                                <li className='font-bold'> <Link to='/dashboard/adminhome'> <span className='text-white flex gap-1' > <FaHome></FaHome> Admin Home </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/addproduct'> <span className='text-white flex gap-1' > <FaLaptopMedical> </FaLaptopMedical> Add Laptop </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/manageproduct'> <span className='text-white flex gap-1' > <BiLaptop> </BiLaptop> Manage Laptop </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/manageuser'> <span className='text-white flex gap-1' > <FaUsers></FaUsers> Manage User </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/managereview'> <span className='text-white flex gap-1' > <MdOutlineRateReview> </MdOutlineRateReview> Manage Review </span> </Link> </li>
                            </>
                            :
                            <>
                                {/* user */}
                                <li className='font-bold'> <Link to='/dashboard/userhome'> <span className='text-white flex gap-1' > <FaHome></FaHome> User Home </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/addreviews'> <span className='text-white flex gap-1' > <MdOutlineRateReview> </MdOutlineRateReview> Add Reviews </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/myorder'> <span className='text-white flex gap-1' > <FaShoppingCart></FaShoppingCart> My Cart 
                                <div className="badge px-2 badge-neutral">+{cart?.length || 0 }</div>
                                </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/mybooking'> <span className='text-white flex gap-1' > <BiLaptop> </BiLaptop>  My Booking
                                <div className="badge px-2 badge-neutral">+{booking?.length || 0 }</div> </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/payment'> <span className='text-white flex gap-1' > <FaWallet></FaWallet> Payment </span> </Link> </li>
                                <li className='font-bold'> <Link to='/dashboard/phistory'> <span className='text-white flex gap-1' > <FaWallet></FaWallet> Payment History </span> </Link> </li>
                            </>
                        }
                        
                        {/* divider */}
                        <div className='divider' ></div>
                        <li className='font-bold'> <Link to='/'> <span className='text-white flex gap-1' > <FaHome></FaHome> Home </span> </Link> </li>
                        <li className='font-bold'> <Link to='/laptops'> <span className='text-white flex gap-1' > <FaLaptopHouse> </FaLaptopHouse> Our Collections </span> </Link> </li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;