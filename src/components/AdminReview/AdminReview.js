import React from 'react';

const AdminReview = ({admins}) => {
    // console.log(admins)
    return (
        <div className='shadow-lg rounded-xl w-[450px] bg-purple-50 p-5'>

            <div className='flex-shrink-0'>
            <img src={admins.imageURL}
            className='mx-auto object-cover rounded-full h-20 w-20 '
            />
            </div>
            
            <div className='text-center p-3'>    
            <p className='text-gray-900 text-2xl font-bold font-serif p-1 m-1'>{admins.admin} </p>
            <p className='p-2 m-1'>{admins.comment} </p>

            <span>⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    );
};

export default AdminReview;