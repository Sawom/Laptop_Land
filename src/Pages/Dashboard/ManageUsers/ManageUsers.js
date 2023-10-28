import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const {data: users = [], refetch } = useQuery(['users'] , async () =>{
        const res = await  axiosSecure.get('/users')
        return res.data;
    })

    // make admin
    const handleMakeAdmin = (user) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then( (result)=>{
            if(result.isConfirmed){
                fetch(`https://laptoplanddb-production.up.railway.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then( (data) =>{
            if(data.modifiedCount ){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                //   end swal
              }
                } )
            }
        } )
    }

    // user delete
    const handleDeleteUser = (user) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result) =>{
                if(result.isConfirmed){
                    fetch(`https://laptoplanddb-production.up.railway.app/users/${user._id}`, {
                        method: 'DELETE'
                    } )
                    .then( res => res.json() )
                    .then( data =>{ 
                        if( data.deletedCount > 0 ){
                            refetch();
                            Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} has deleted!`,
                            showConfirmButton: false,
                            timer: 1500
                        })

                        }
                    })
                }
        } ) 
    } 

    return (
        <div className='container mx-auto px-1'>
            {/* heading */}
            <section className='text-center mb-10 mt-10' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold mt-10' > Manage user </span> </p>
            </section>
            <h3 className='lg:text-3xl md:text-3xl text-xl font-bold ml-4 '> Total users: {users.length} </h3>
            <br />
            {/* table */}
           <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr key={user._id} >
                            <th>{index + 1}</th>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            {/* check admin  */}
                            <td>
                                
                                {
                                    user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-blue-700
                                      text-white"> <FaUserShield></FaUserShield> </button>
                                }
                            </td>
                            {/* delete button */}
                            <td> 
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr> )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;