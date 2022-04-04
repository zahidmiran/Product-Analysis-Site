import React from 'react';
import useReview from '../../hooks/useReview';
import AdminReview from '../AdminReview/AdminReview';

const Reviews = () => {
    const [review, setReview] = useReview();
    console.log('the',review)
    return (
        <div>
            <h1 className='text-center font-sans text-xl  p-5 m-5'> Total Reviews: {review.length} </h1>
            <p className='text-center font-sans text-xl font-bold p-5 '>What Billioner says about our Product</p>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
            {
                review.map(admins => (
                    // console.log(admins),
                    <AdminReview key={admins.id} admins={admins}/>
                    ))
            }
            </div>
        </div>
    );
};

export default Reviews;