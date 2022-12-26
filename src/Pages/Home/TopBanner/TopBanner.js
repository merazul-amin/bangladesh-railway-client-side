import React from 'react';
import SearchTrains from './SearchTrains/SearchTrains';

const TopBanner = () => {
    return (
        <div className='lg:flex w-[90%] mx-auto my-10'>
            <div className='w-full lg:w-[45%] mx-auto'>
                <SearchTrains></SearchTrains>
            </div>
            <div className='w-full lg:w-[45%] mx-auto mt-10 rounded-lg'>
                <img className='w-full rounded-lg' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/Home-Page-Image-Nagad-Campaign.png" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;