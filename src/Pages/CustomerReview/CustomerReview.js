import React, { useEffect, useState } from 'react';
import Cbanner from './Cbanner';
import ShowReview from './ShowReview';

const CustomerReview = () => {
    const [allreview , setAllreview] = useState([]);

    useEffect( ()=>{
        fetch('https://laptoplanddb-production.up.railway.app/homereview')
        .then( res => res.json() )
        .then(data =>{
            setAllreview(data);
            } )
    }, [] )

    // search review
    useEffect( ()=>{
        getReview();
    }, [] )

    const getReview = async ()=>{
        let result = await fetch('https://laptoplanddb-production.up.railway.app/homereview');
        result = await result.json();
        setAllreview(result);
    }

    const handleSearchReview = async (event) =>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`https://laptoplanddb-production.up.railway.app/search/${key}`);
            result = await result.json();
            if (result){
                setAllreview(result);
            }
        }
        else{
            getReview();
        }
    }

    return (
        <div>
            <div>
                <Cbanner></Cbanner>
            </div>
            
            <div className='container mx-auto'>
                {/* search */}
                <div className='text-center mt-10' >
                <input type="text" onChange={handleSearchReview} placeholder="Search by laptop model"  className="input input-bordered border-2 w-full text-center  " />
                </div>
                <br />
                {/* show all reviews */}
                <div className=' my-10' >
                    {   
                        allreview.length > 0 ?
                        allreview.map( (reviews)=> <ShowReview
                            reviews={reviews} key={reviews._id}
                        ></ShowReview> )
                        : <h1 className='text-2xl'> No result has found! </h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;