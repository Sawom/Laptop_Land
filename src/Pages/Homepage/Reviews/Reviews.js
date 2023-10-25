import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';


const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/homereview')
            .then(res => res.json())
            .then( (data)=>{
                setReview(data);
            } )
    }, [] )

    return (
        <div className='mt-20 mx-auto container' >
            <h1 className='text-center lg:text-4xl md:text-3xl text-xl font-bold' >
                <span className=' py-4 border-y-4 uppercase' >Our Customer reviews </span> 
            </h1>
            
            <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className='grid grid-cols-1' >
        {
            review.map( (quote)=> <SwiperSlide 
                key={quote._id} >
                    <div className="flex flex-col items-center mx-24 my-16" >
                        <Rating style={{ maxWidth: 150 }} value={quote.rating} readOnly  /> <br />
                        <p className='text-left'> {quote.servicereview} </p> <br />
                        <p className='text-xl text-yellow-600' > {quote.name} </p>
                    </div>
            </SwiperSlide> )
        }
            </Swiper>
        
            <div className='text-center my-5'>
                <Link to='/creview'>
                    <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">View All reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Reviews;