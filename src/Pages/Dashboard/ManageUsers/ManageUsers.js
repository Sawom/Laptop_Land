import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    // load user
    const {data: users = [], refetch } = useQuery(['users'] , async () =>{
        const res = await axiosSecure.get('/users')
        return res.data ;
    })

    // make admin
    const handleMakeAdmin = (user) =>{
        fetch(`http://localhost:5000/users/admin/{user._id}`, {
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
                    fetch(`http://localhost:5000/users/${user._id}`, {
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
        <div>
            
        </div>
    );
};

export default ManageUsers;