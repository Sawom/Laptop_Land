import React, { useEffect, useState } from 'react';
import CardLaptop from '../CardLaptop/CardLaptop';
import BookingPage from '../../BookingPage/BookingPage';

const LoadLaptop = () => {
    const [laptop, setLaptop] = useState([]); // data = laptop
    
    useEffect( ()=>{
        fetch('http://localhost:5000/laptop')
        .then( res => res.json() )
        .then(data =>{
            setLaptop(data);
            } )
    }, [] )

    // searching
    useEffect( ()=>{
        getLaptop();
    }, [] )

    const getLaptop = async () =>{
        let result = await fetch('http://localhost:5000/laptop');
        result = await result.json();
        setLaptop(result);
    }

    const handleSearch = async (event) =>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result){
                setLaptop(result);
            }
        }
        else{
            getLaptop();
        }
    }

    return (
        <div  className='container mx-auto'>
            {/* search */}
            <div className='text-center mt-10' >
               <input type="text" placeholder="Search by brand or model" onChange={handleSearch} className="input input-bordered border-2 w-full text-center  " />
            </div>
            <br />
           
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 my-10'>
                {
                    laptop.length > 0 ?
                    laptop.map((laptopdata)=> <CardLaptop
                        laptopdata={laptopdata} key={laptopdata._id}
                    ></CardLaptop>  )
                    : <h1 className='text-2xl'> No result has found! </h1>
                }
            </div>
        </div>
    );
};

export default LoadLaptop;