import React from 'react';

const AboutInfo = ({aboutinfo}) => {
    const{about, story,quality,expert,services, community, commitment,joinus, last,last2 } = aboutinfo ;

    return (
        <div>
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >About Laptop Land</p>
            <p> {about} </p> 
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Our Story</p>
            <p> {story} </p>
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Quality and Variety</p>
            <p> {quality} </p>
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Expert Guidance</p>
            <p> {expert} </p>
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Exceptional Customer Service</p>
            <p> {services} </p>
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Community</p>
            <p> {community} </p>
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Our Commitment</p>
            <p> {commitment} </p>
            <br />
            <p className='font-bold lg:text-2xl md:text-2xl text-xl' >Join Us on Your Tech Journey</p>
            <p> {joinus} </p>
            <br />
            <p> {last} </p>
            <p> {last2} </p>
        </div>
    );
};

export default AboutInfo;