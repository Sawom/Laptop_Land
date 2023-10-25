import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import {FaDollarSign} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Authentication/useAuth/useAuth';

const MyOrders = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0 )
    const {user} = useAuth();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Order has deleted!',
                                'success'
                            )
                        }

                    })
            }
        })
    }

    return (
        <div className='container mx-auto px-4'>
            {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > My Cart </span> </p>
            </section>
            <h1 className='text-xl mx-5'> <span className='text-blue-600'> {user.displayName}</span> , here is your order. Please pay to confirm order.</h1>
            <br />
            <div className='font-semibold h-[80px] flex justify-evenly items-center'>
                <h3 className='text-xl'> Total Items: {cart.length} & </h3>
                <h3 className='text-xl mx-1'> Total price: {total} BDT </h3>
                <Link to="/dashboard/payment">
                    <button className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex'><FaDollarSign></FaDollarSign> Pay</span> </button>
                </Link>
            </div>
            <br />
            {/* table */}
             <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Laptop</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.model}
                                </td>
                                <td className="">{item.price} BDT</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* table end */}
            
        </div>
    );
};

export default MyOrders;