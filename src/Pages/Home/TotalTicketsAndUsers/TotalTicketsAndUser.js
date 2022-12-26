import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const TotalTicketsAndUser = () => {
    const todaysDate = new Date();
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-center my-5 text-[#023623] text-xl font-bold'>Last Updated On {format(new Date(), "Pp")}</h1>


            <div className='lg:flex justify-around'>
                {/* This div is for available ticket counts */}
                <div className='lg:w-[50%] mx-auto mx-10'>
                    <div className='bg-gradient-to-r from-[#215e4b] to-[#8adac2] p-3 text-white text-xl font-bold rounded-t-md'>
                        <h1>Available Tickets</h1>
                    </div>

                    <div className='flex justify-center h-[50px] bg-gray-200 rounded-b-md'>
                        <p>Combined Tickets <br /> (Online &#38; Offline) </p>
                        <p className='text-3xl ml-5'>{35155}</p>
                    </div>

                </div>

                {/* This div is for users counts */}
                <div className='lg:w-[50%] mx-10 mt-10 lg:mt-0'>
                    <div>
                        <h1 className='bg-gradient-to-r from-[#d68941] to-[#caa076] p-3 text-xl rounded-t-md text-white font-bold'>Logged In User</h1>

                        <h1 className='text-center h-[50px] bg-gray-200 rounded-b-md'>Web &#38; App <span className='text-3xl'>797009</span></h1>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default TotalTicketsAndUser;