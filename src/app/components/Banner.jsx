import React from 'react';

const Banner = () => {
    return (
        <div className='mt-28'>
           <div className='text-center'>
            <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-sm my-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.
            </p>
            <button className='btn bg-green-600 font-light border-green-600'>
               + Add a Friend
            </button>
            </div> 
            <div className='mt-24 flex items-center justify-center text-center gap-4'>
            <div className='p-4 bg-white'>
                <h2 className='text-2xl font-bold'>10</h2>
                <p className='text-[18px] text-gray-600'>Total Friends</p>
            </div>
            <div className='p-4 bg-white'>
                <h2 className='text-2xl font-bold'>3</h2>
                <p className='text-[18px] text-gray-600'>On Track</p>
            </div>
            <div className='p-4 bg-white'>
                <h2 className='text-2xl font-bold'>6</h2>
                <p className='text-[18px] text-gray-600'>Need Attention</p>
            </div>
            <div className='p-4 bg-white'>
                <h2 className='text-2xl font-bold'>12</h2>
                <p className='text-[18px] text-gray-600'>Interaction this month</p>
            </div>
            </div>
            <hr className='h-1 mx-auto bg-red-100 w-[500px] border-none' />
        </div>
    );
};

export default Banner;