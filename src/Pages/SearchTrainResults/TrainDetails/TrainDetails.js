import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import TrainDetailsAccordian from './TrainDetailsAccrodian/TrainDetailsAccordian';

const TrainDetails = () => {
    return (
        <div className='w-[90%] lg:flex  mx-auto my-10'>
            {/* Left Side */}
            <div className='lg:w-[70%]'>
                {/* Top Note */}
                <div className='text-white flex bg-[#DA924E] p-2 rounded-lg '>
                    <RiErrorWarningLine className='text-5xl mr-2' ></RiErrorWarningLine>
                    <h1> Please Note:  Other users may be in the process of purchasing tickets at this moment. But in case of payment failure, those tickets may become available time-to-time.</h1>
                </div>
                {/* Train details */}
                <div className='my-10'>
                    <TrainDetailsAccordian></TrainDetailsAccordian>
                </div>

            </div>
            {/* Right Side */}
            <div className='hidden lg:block lg:w-[30%]'>
                <div className='relative'>
                    <img className='' src="https://d19qjkjk65tfln.cloudfront.net/img/train-apps.png" alt="" />
                    <div className='absolute top-10 right-12'>
                        <p className=''>Download the all new</p>
                        <h2 className='text-xl'>Rail Sheba App</h2>
                        <img src="https://d19qjkjk65tfln.cloudfront.net/img/play-store.png" alt="" />
                    </div>
                </div>
                <div>
                    <img src="https://d19qjkjk65tfln.cloudfront.net/img/padma-bridge.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TrainDetails;