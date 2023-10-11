import React from 'react';
import Slides from '../Slides/Slides';
import Brands from '../Brands/Brands';
import CallUs from '../CallUs/CallUs';
import Banner from '../Banner/Banner';
import Products from '../NewProducts/Products';

const Home = () => {
    return (
        <div>
           <Slides></Slides>
           <Brands></Brands>
           <Products></Products>
           <CallUs></CallUs>
           <Banner></Banner> 
        </div>
    );
};

export default Home;