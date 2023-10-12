import React from 'react';
import useLaptops from '../../../Hooks/useLaptops';
import CardLaptop from '../CardLaptop/CardLaptop';

const LoadLaptop = () => {
     const [laptop, loading , refetch] = useLaptops();

    return (
        <div  className='container mx-auto'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 my-10'>
                {
                    laptop.map((laptopdata)=> <CardLaptop
                        laptopdata={laptopdata} key={laptopdata._id}
                    ></CardLaptop>  )
                }
            </div>
        </div>
    );
};

export default LoadLaptop;