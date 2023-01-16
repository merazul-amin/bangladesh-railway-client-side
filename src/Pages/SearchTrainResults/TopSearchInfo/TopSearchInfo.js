import { Avatar } from '@mui/material';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TopSearchInfo = ({ from, to, date }) => {
    return (
        <div className='py-10 bg-slate-200'>
            <div className='lg:flex ml-10  justify-around'>
                {/* left from-to date */}
                <div className='flex lg:w-[30%]'>
                    <Avatar

                        alt="Train"
                        src="https://d19qjkjk65tfln.cloudfront.net/img/train-app/running-train-icon.svg"
                        sx={{ width: 56, height: 56 }}
                    />
                    <div className='ml-3'>
                        <p className='text-orange-500 font-bold'>{from} - {to}</p>
                        <p>{date}</p>
                    </div>
                </div>

                {/* Right navigation and modify */}
                <div className='flex flex-col lg:flex-row my-10 lg:my-0 lg:justify-around lg:w-[70%]'>

                    {/* prev nex */}
                    <div className='flex'>

                        <button className='text-orange-400 mr-1 bg-white px-3 rounded-l-full text-lg font-bold'><BsChevronLeft className='inline text-green-500 '></BsChevronLeft> PREV.DAY</button>

                        <button className='text-orange-400 bg-white rounded-r-full px-3 text-lg font-bold'>NEXT.DAY <BsChevronRight className='inline text-green-500'></BsChevronRight></button>
                    </div>

                    {/* Modify Search */}
                    <div className='my-5 lg:my-0'>
                        <button className='text-white rounded-full bg-orange-400 p-3'>MODIFY SEARCH</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopSearchInfo;