import React from 'react';
import useBooking from '../../../Hooks/useBooking';
import useAuth from '../../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";

const MyBooking = () => {
    const [booking, refetch] = useBooking();
    const {user} = useAuth();
    const total = booking.reduce((sum, item)=> item.price + sum, 0 )

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
                fetch(`http://localhost:5000/booking/${item._id}`, {
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
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > My Booking </span> </p>
            </section>
            
            <div>
                <h1 className=' mx-5'> <span className='text-blue-600'> {user.displayName}</span> , here is your booking products. Please wait for admin approval. **Maximum two hours.</h1>
                <br />
                <div className='font-semibold h-[80px] flex justify-evenly items-center'>
                    <h3 className='text-xl'> Total Booking products: <span className='text-blue-600' >{booking.length}</span>  & Total price: <span className='text-blue-600'>{total} BDT</span>  </h3>
                </div>
            </div>
            

            {/* table */}
             <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((item, index) => <tr key={item._id} >
                                <td>
                                    {index + 1}
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

        </div>
    );
};

export default MyBooking;