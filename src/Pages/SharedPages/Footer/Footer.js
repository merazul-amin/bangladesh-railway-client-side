import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5 '>
            <hr className='border-green-600 border-2' />
            {/* three div for flex*/}
            <div className='w-[90%] mx-auto py-7 lg:flex justify-between'>
                {/* left logo */}
                <div className='flex justify-center w-[95%] lg:w-[30%]'>
                    <div>
                        <Link to='/'>  <img className='w-[50px]' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bangladesh-railway.png" alt="" /></Link>
                    </div>
                    <div>
                        <Link to='/'> <h4 className='text-[#DA924E] text-xl font-bold'>Bangladesh Railway</h4></Link>
                        <p className='text-sm text-center text-green-700'>নিরাপদ, আরামদায়ক, সাশ্রয়ী।</p>
                    </div>
                </div>

                {/* Middle terms and conditions */}
                <div className='text-center my-10 lg:my-0'>
                    <p className='text-green-700 font-bold lg:mt-4'>
                        <Link> Terms and Conditions </Link>
                        |
                        <Link> Privacy Policy</Link>
                    </p>

                </div>

                {/* Right side for sponsors */}
                <div className='text-center my-10 lg:my-0'>
                    <p className='font-bold'>Powered by</p>
                    <h1 className='text-green-700 font-bold text-2xl'>Shohoz-Synesis-Vincen JV</h1>
                </div>

            </div>
        </div>
    );
};

export default Footer;