import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Authentication/useAuth/useAuth';
import useCart from '../../../Hooks/useCart';
import Swal from 'sweetalert2';
import {CgDetailsMore} from 'react-icons/cg';
import {FaCartPlus} from 'react-icons/fa';

const CardLaptop = ({laptopdata}) => {
    const { _id, model, brand, img, price,  code } = laptopdata;
    const {user} = useAuth();

    let navigate = useNavigate();
    const location = useLocation(); 

    const [,refetch] = useCart()

    // dynamic route url
    const url = `/laptopinfo/${_id}` ;
    const handleView = ()=>{
        navigate(url);
    }

    // add to cart
    const handleAddToCart = (laptopdata) =>{
        if(user && user.email){
            const cartItem = {laptopId: _id, code , model, img, price, email: user.email};

            fetch('https://laptoplanddb-production.up.railway.app/carts', {
                method: 'POST', 
                headers:{
                     'content-type' : 'application/json'
                },
                 body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Laptop added to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })  
                }


            })

        }
        else{
            
            Swal.fire({
                title: 'Please login to add laptop in your cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
            
        } 
    }

    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-2xl px-2">
                <figure><img className='w-full' src={img} alt="laptops" /></figure>
                <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > {price} BDT </p>
                <div className="card-body text-left ">
                    <h2 className="card-title font-bold" style={{color: '#212E52'}} > {model} </h2>
                    <p> Product code: {code} </p>
                    <p> Brand: {brand} </p>
                    <button onClick={ ()=> handleAddToCart(laptopdata) } style={{backgroundColor: '#212E52'}} className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <FaCartPlus> </FaCartPlus> add to cart </span> </button>
                    <button onClick={handleView}  style={{backgroundColor: '#212E52'}} className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <CgDetailsMore> </CgDetailsMore> View details </span> </button>
                </div>
            </div>
        </div>
    );
};

export default CardLaptop;
