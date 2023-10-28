import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../../../images/slide/pic1.png';
import pic2 from '../../../images/slide/pic2.png';
import pic3 from '../../../images/slide/pic3.png';
import pic4 from '../../../images/slide/pic4.png';
import pic5 from '../../../images/slide/pic5.png';
import pic6 from '../../../images/slide/pic6.png';
import './Slides.css';
import { Link } from 'react-router-dom';
import {AiFillShopping} from 'react-icons/ai';

const Slides = () => {
    return (
        <div className='container mx-auto mb-20'>
           <Carousel 
           className='backColor p-4'
            infiniteLoop showArrows={true} autoPlay={true} loop={true} >
                {/* 1 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1' >
                    <div className='text-left p-2' >
                       <p className='lg:text-3xl md:text-2xl text-xl mt-10 font-bold'>
                        Laptop Land: Your One-Stop Destination for Cutting-Edge Laptops!
                        </p> 
                        <Link to='/laptops'>
                            <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <AiFillShopping> </AiFillShopping> Shop Now </span>  </button>
                        </Link>
                    </div>
                    <div >
                        <img alt='pic1' src={pic1} className='w-full' />
                    </div>
                </div>
                {/* 2 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div className='text-left p-2' >
                        <p className='lg:text-3xl md:text-2xl text-xl mt-10 font-bold' >
                            Discover the Future of Computing at Laptop Land. Visit Us Today!
                        </p>
                        <Link to='/laptops'>
                            <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <AiFillShopping> </AiFillShopping> Shop Now </span> </button>
                        </Link>
                    </div>
                    <div >
                        <img alt='pic2' src={pic2} className='w-full' />
                    </div>
                </div>
                {/* 3 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div className='text-left p-2' >
                        <p className='lg:text-3xl md:text-2xl text-xl mt-10 font-bold' >
                            Upgrade Your Tech Game with Laptop Land - Quality Laptops at Unbeatable Prices!
                        </p>
                        <Link to='/laptops'>
                            <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <AiFillShopping> </AiFillShopping> Shop Now </span> </button>
                        </Link>
                    </div>
                    <div >
                        <img alt='pic3' src={pic3} className='w-full' />
                    </div>
                </div>
                {/* 4 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div className='text-left p-2' >
                        <p className='lg:text-3xl md:text-2xl text-xl mt-10 font-bold' >
                            Laptop Land - Your Trusted Source for Top Brands and Exceptional Service. Visit Us Today!
                        </p>
                        <Link to='/laptops'>
                            <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <AiFillShopping> </AiFillShopping> Shop Now </span> </button>
                        </Link>
                    </div>
                    <div >
                        <img alt='pic4' src={pic4} className='w-full' />
                    </div>
                </div>
                {/* 5 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div className='text-left p-2' >
                        <p className='lg:text-3xl md:text-2xl text-xl mt-10 font-bold' >
                            Experience the Laptop Land Difference - Quality, Value, and Expertise Combined!
                        </p>
                        <Link to='/laptops'>
                            <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <AiFillShopping> </AiFillShopping> Shop Now </span> </button>
                        </Link>
                    </div>
                    <div >
                        <img alt='pic5' src={pic5} className='w-full' />
                    </div>
                </div>
                {/* 6 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div className='text-left p-2' >
                        <p className='lg:text-3xl md:text-2xl text-xl mt-10 font-bold' >
                            Your Laptop Dreams Come True at Laptop Land - Visit Us Today!
                        </p>
                        <Link to='/laptops'>
                            <button style={{backgroundColor: '#212E52'}} className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "> <span className='flex gap-1'> <AiFillShopping> </AiFillShopping> Shop Now </span> </button>
                        </Link>
                    </div>
                    <div >
                        <img alt='pic6' src={pic6} className='w-full' />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slides;