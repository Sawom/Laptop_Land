import React, { useEffect, useState } from 'react';
import FAQBanner from './FAQBanner/FAQBanner';
import FAQinfo from './FAQinfo';

const FAQSPage = () => {
    const [faq, setFaq] = useState([]);

    useEffect( ()=>{
        fetch('https://laptoplanddb-production.up.railway.app/faqs')
        .then(res=> res.json())
        .then((data) =>{
            setFaq(data)
        } )
    },[] )

    return (
        <div>
            <FAQBanner></FAQBanner>
            <div>
                {
                    faq.map( (faqinfo) => <FAQinfo 
                        faqinfo={faqinfo} key={faqinfo._id}
                    ></FAQinfo> )
                }
            </div>
        </div>
    );
};

export default FAQSPage;