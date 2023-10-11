import React from 'react';
import Slides from '../Slides/Slides';
import Brands from '../Brands/Brands';
import CallUs from '../CallUs/CallUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Slides></Slides>
           <Brands></Brands>
           <CallUs></CallUs>
           <Banner></Banner> 
        </div>
    );
};

export default Home;