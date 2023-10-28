import React from 'react';
import not from '../../images/gif/not.gif';

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <img className='w-full' src={not} alt="notfound" />
        </div>
    );
};

export default NotFound;