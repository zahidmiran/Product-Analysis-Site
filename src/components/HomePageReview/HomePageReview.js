import React from 'react';

const HomePageReview = ({review}) => {
    console.log(review)
    return (
        <div className='shadow-lg rounded-xl w-[300px] bg-slate-200 p-5'>

            <div className='flex-shrink-0'>
            <img src={review.imageURL}
            className='mx-auto object-cover rounded-full h-20 w-20 '
            />
            </div>
            
            <div className='text-center p-3'>    
            <p className='text-gray-900 text-2xl font-bold font-serif p-1 m-1'>{review.admin} </p>
            <p className='p-2 m-1'>{review.comment} </p>

            <span>⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    );
};

export default HomePageReview;