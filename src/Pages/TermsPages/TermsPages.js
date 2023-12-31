import React, { useEffect, useState } from 'react';
import TermBanner from './TermBanner/TermBanner';
import TermInfo from './TermInfo';

const TermsPages = () => {
    const [terms, setTerms] = useState([]);

    useEffect( ()=>{
        fetch('https://laptoplanddb-production.up.railway.app/terms')
        .then(res=> res.json())
        .then((data) =>{
            setTerms(data)
        } )
    },[] )

    return (
        <div>
            <TermBanner></TermBanner>
            <div  >
                {
                    terms.map( (termsinfo)=> <TermInfo
                        key={termsinfo._id} termsinfo={termsinfo}
                    ></TermInfo> )
                }
            </div>
        </div>
    );
};

export default TermsPages;