import React from 'react';

const PaymentLogos = () => {
    return (
        <div className=' my-10'>
            <hr />

            {/* payment images for flex design */}
            <div className='w-[90%] mx-auto lg:flex lg:-w-[80%] justify-center py-5'>
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

            {/* Some Text */}
            <div>
                <h1 className='w-[90%] mx-auto text-center text-green-900 font-bold mt-10'>* The Tickets are issued by Bangladesh Railway's Centrally Computerized Seat Reservation 	&#38; Ticketing System (CCSRTS) and Shohoz-Synesis-Vincen JV is responsible for designing, development, implementation, technical operation 	&#38; maintenance of the system.</h1>
            </div>
        </div>
    );
};

export default PaymentLogos;