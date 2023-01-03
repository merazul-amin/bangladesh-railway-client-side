import React from 'react';

const PaymentLogos = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <hr />

            {/* payment images for flex design */}
            <div className='w-[90%] mx-auto lg:flex lg:-w-[80%] justify-center py-10'>
                <div>
                    <img className='w-[50px] mx-auto lg:mx-[20px] my-10' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bkash.png" alt="" />
                </div>
                <div>
                    <img className='w-[70px] mx-auto lg:mx-[20px] my-10' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/nagad-32.png" alt="" />
                </div>

                <div>
                    <img className='w-[70px] mx-auto lg:mx-[20px] my-5' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/rocket.svg" alt="" />
                </div>
                <div>
                    <img className='w-[90px] mx-auto lg:mx-[20px] my-10' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/visa.png" alt="" />
                </div>
                <div>
                    <img className='w-[60px] mx-auto lg:mx-[20px] my-10' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/nexus-debit.svg" alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default PaymentLogos;