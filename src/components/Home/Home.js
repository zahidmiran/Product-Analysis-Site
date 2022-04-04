import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import HomePageReview from '../HomePageReview/HomePageReview';

const Home = () => {
    const [review, setReview] = useReview();
    // const reviewers = review;
    const threeReview = review.slice(0, 3)
    const navigate = useNavigate();

    // console.log(review)

    console.log(threeReview)
    // console.log(review)

    // let name;
    // for(const product of threeReview){
    //     console.log(product)
    //     name = product.admin;
    // }


    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
                <div className='flex  justify-center items-center'>
                    <img className='w-100%' src='headphone.jpg'></img>
                </div>

                <div className='flex-row text-center justify-center items-center'>
                    <h2 className='text-xl text-gray-700 font-mono p-2 font-bold'>MH40 WIRELESS</h2>
                    <h1 className='text-2xl text-gray-800 p-3 m-2 font-bold'>Wireless Over-Ear Headphones</h1>
                    <p className='text-3xl'>299€</p>
                    <p className='text-2xl m-2 font-thin'>
                        The MH40 Wireless Over-Ear Headphones are a wireless version of our original, vintage aviator-inspired wired headphones. Crafted from aluminum, the headphones are wrapped in coated canvas with lambskin leather detailing on the inner headband and ear pad.

                    </p>

                    <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>BUY NOW</button>

                </div>
            </div>

            <div className='text-center mt-36'>
                <h5 className='m-3 p-2 text-3xl font-bold font-sans '>Product Feedback ({threeReview.length}) </h5>
                <h5 className='p-2 mb-5 text-xl font-semibold'> -- what they said -- </h5>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center'>
                    {
                        threeReview.map(review =>
                            // console.log(review),
                            <HomePageReview key={review.id} review={review}>
                            </HomePageReview>
                        )

                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='mt-10 mx-auto py-2 px-3 text-white  rounded-2xl bg-sky-400'>See All Review</button>


            </div>

        </div>
    );
};

export default Home;