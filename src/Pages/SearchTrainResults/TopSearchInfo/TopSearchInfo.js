import { Avatar } from '@mui/material';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TopSearchInfo = ({ from, to, date }) => {
    return (
        <div className='py-10 bg-slate-200'>
            <div className='flex'>
                {/* left from-to date */}
                <div className='flex'>
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
                <div>

                    {/* prev nex */}
                    <div className='flex'>
                        <p className='text-orange-400 text-xl font-bold'><BsChevronLeft className='inline text-green-500 '></BsChevronLeft> PREV.DAY</p>
                        <p className='text-orange-400 text-xl font-bold'>NEXT.DAY <BsChevronRight className='inline text-green-500'></BsChevronRight></p>
                    </div>

                    {/* Modify Search */}
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopSearchInfo;