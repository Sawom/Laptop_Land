import React from 'react';

const FAQinfo = ({faqinfo}) => {
    const {qtn1,ans1,qtn2,ans2,qtn3,ans3,qtn4,ans4,qtn5,ans5,qtn6,ans6,qtn7,ans7,qtn8,ans8,qtn9,ans9} = faqinfo;

    return (
        <div className='container mx-auto my-5' >
            {/* 1 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    <p> 1. {qtn1} </p>
                </div>
                <div className="collapse-content"> 
                    <p> {ans1} </p>
                </div>
            </div>
            {/* 2 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    2. {qtn2}
                </div>
                <div className="collapse-content"> 
                    <p> {ans2} </p>
                </div>
            </div>
            {/* 3 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    3. {qtn3}
                </div>
                <div className="collapse-content"> 
                    <p>{ans3}</p>
                </div>
            </div>
            {/* 4 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    4. {qtn4}
                </div>
                <div className="collapse-content"> 
                    <p>{ans4}</p>
                </div>
            </div>
            {/* 5 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    5. {qtn5}
                </div>
                <div className="collapse-content"> 
                    <p>{ans5}</p>
                </div>
            </div>
            {/* 6 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    6. {qtn6}
                </div>
                <div className="collapse-content"> 
                    <p>{ans6}</p>
                </div>
            </div>
            {/* 7 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    7. {qtn7}
                </div>
                <div className="collapse-content"> 
                    <p>{ans7}</p>
                </div>
            </div>
            {/* 8 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    8. {qtn8}
                </div>
                <div className="collapse-content"> 
                    <p>{ans8}</p>
                </div>
            </div>
            {/* 9 */}
            <div className="collapse bg-base-100 collapse-arrow shadow-2xl p-3 my-5">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    9. {qtn9}
                </div>
                <div className="collapse-content"> 
                    <p>{ans9}</p>
                </div>
            </div>
            {/* others */}
            <div>
                You can contact our customer support team via email or phone. We're here to assist you with any questions or concerns you may have.
            </div>
        </div>
    );
};

export default FAQinfo;