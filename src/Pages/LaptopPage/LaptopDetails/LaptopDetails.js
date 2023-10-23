import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LaptopDetails = () => {
    const {id} = useParams();
    const[details, setDetails] = useState({}); 
    
    useEffect( ()=>{
        fetch(`http://localhost:5000/laptop/${id}`)
        .then(data => data.json() )
        .then(data => setDetails(data) )
    }, [] )

    // booking url
    let navigate = useNavigate();
    // dynamic route url
    const url = `/booking/${details._id}` ;
    const handleBook = ()=>{
        navigate(url);
    }

    return (
        <div className='container mx-auto mt-5'>
            {/* 1 */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-2 gap-4">
            <figure><img className='w-50 ' src={details.img} alt="laptops" /></figure>
            <div className=" text-left mt-10">
                <h2 className="card-title font-bold" style={{color: '#212E52'}} > Model: {details.model} </h2>
                <br />
                <p> <span className='font-bold'>product Code:</span>  {details.code} </p>
                <p> <span className='font-bold'>Brand:</span>  {details.brand} </p>
                <p> <span className='font-bold'>Processor:</span>  {details.processor} </p>
                <p> <span className='font-bold'>Ram:</span>  {details.ram} </p>
                <p> <span className='font-bold'>Ram Type:</span> {details.ramtype} </p>
                <p style={{color: '#212E52'}} className='font-bold'>Price: {details.price} BDT </p>
                <button onClick={handleBook} style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">Book now</button>
            </div>
        </div>
        {/* 2 */}
            <div className='mt-10'>
                <h1 className='lg:text-4xl md:text-3xl text-xl font-bold' >More Information</h1> <br />
                <div >
                    <p> <span className='font-bold'>Display:</span> {details.display} </p>
                    <p> <span className='font-bold'>Storage Capacity:</span> {details.storagecapacity} </p>
                    <p> <span className='font-bold'>Graphics:</span> {details.graphics} </p>
                    <p> <span className='font-bold'>Keyboard:</span> {details.keyboard} </p>
                    <p> <span className='font-bold'>Camera:</span> {details.camera} </p>
                    <p> <span className='font-bold'>Speaker:</span> {details.speaker} </p>
                    <p> <span className='font-bold'>Audio:</span> {details.audio} </p>
                    <p> <span className='font-bold'>Network:</span> {details.network} </p>
                    <p> <span className='font-bold'>Operating System:</span> {details.os} </p>
                    <p> <span className='font-bold'>Weight:</span> {details.weight} </p>
                    <p> <span className='font-bold'>Description:</span> </p>
                    <p> {details.description} </p>
                   
                </div>
                
            </div>
        </div>
    );
};

export default LaptopDetails;