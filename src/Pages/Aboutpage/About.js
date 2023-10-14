import React, { useEffect, useState } from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutInfo from './AboutInfo';

const About = () => {
    const [about, setAbout] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/about')
        .then(res=> res.json())
        .then((data) =>{
            setAbout(data)
        } )
    },[] )

    return (
        <div>
           <AboutBanner></AboutBanner> 
           <div className='container p-5 my-5 shadow-2xl  mx-auto'>
                {
                    about.map( (aboutinfo)=> <AboutInfo
                        key={aboutinfo._id} aboutinfo={aboutinfo}
                    ></AboutInfo> )
                }
           </div>
        </div>
    );
};

export default About;