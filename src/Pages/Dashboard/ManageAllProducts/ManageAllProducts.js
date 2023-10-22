import React from 'react';
import useLaptops from '../../../Hooks/useLaptops';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const ManageAllProducts = () => {
    const [laptop, loading, refetch]  = useLaptops();
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteLaptop = (item) =>{
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
                axiosSecure.delete(`/laptop/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='container mx-auto'>
            <p className='lg:text-3xl md:text-3xl text-xl font-bold ml-4'> Total Product: {laptop.length} </p>
            {/* product are showing */}
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            laptop.map((item, index) => <tr key={item._id}>
                                {/* index */}
                                <td>
                                    {index + 1}
                                </td>
                                {/* image */}
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.model}</div>
                                        </div>
                                    </div>
                                </td>
                                {/* price */}
                                <td className="">{item.price} BDT</td>
                                {/* edit */}
                                <td>
                                    {/* edit button*/}
                                   <Link to={`/dashboard/manageproduct/update/${item._id}`} > <button className="btn btn-ghost btn-xs">Edit</button> </Link> 
                                </td>
                                {/* delete button */}
                                <td>
                                    <button className="btn btn-ghost bg-red-600  text-white" onClick={() => handleDeleteLaptop(item)} ><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllProducts;