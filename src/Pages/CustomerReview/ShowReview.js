import React from 'react';

const ShowReview = ({reviews}) => {
    const {name, email, productcode, model, rating, productreview, servicereview} = reviews;

    return (
        <div>
           <div className="card w-full bg-base-100 shadow-xl my-3">
                <div className="card-body text-left">
                    <h2 className="card-title">{model}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div> 
        </div>
    );
};

export default ShowReview;