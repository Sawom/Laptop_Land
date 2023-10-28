import React, { useEffect, useState } from 'react';
import CardProducts from './CardProducts';
import { Link } from 'react-router-dom';
import {FaLaptopHouse} from 'react-icons/fa';

const Products = () => {
    // load home data
    const [homedata, setHomedata] = useState([]);

    useEffect( ()=>{
        fetch('https://laptoplanddb-production.up.railway.app/homedata')
            .then(res => res.json())
            .then( data =>{
                setHomedata(data);
                // console.log(data);
            } )
    } , [])

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center lg:text-4xl md:text-3xl text-xl my-10 font-bold' >
                <span className=' py-4 border-y-4 uppercase' >new arrival </span> 
            </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10'>
                {
                    homedata.map( (laptopInfo) => <CardProducts
                         key={laptopInfo._id} laptopInfo={laptopInfo}
                    ></CardProducts> )
                }
            </div>
            {/* button responsive */}
            <div className='text-center my-5'>
                <Link to='/laptops'>
                    <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <FaLaptopHouse> </FaLaptopHouse> View All Collections </span> </button>
                </Link>
            </div>
            
        </div>
    );
};

export default Products;