import React from 'react';
import Slides from '../Slides/Slides';
import Brands from '../Brands/Brands';
import CallUs from '../CallUs/CallUs';
import Banner from '../Banner/Banner';
import Products from '../NewProducts/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Slides></Slides>
           <Brands></Brands>
           <Products></Products>
           <CallUs></CallUs>
           <Banner></Banner>
           <Reviews></Reviews> 
        </div>
    );
};

export default Home;