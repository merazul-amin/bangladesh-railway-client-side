import React from 'react';

const Facilities = () => {
    return (
        <div className='w-[90%] mx-auto my-20 grid md:grid-cols-3 gap-4 place-items-center'>
            <div>
                <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/search.svg" alt="" />
                <h1 className='text-3xl font-bold'>Search</h1>
                <p>Choose your origin, destination, <br /> journey dates and search for trains.</p>
            </div>
            <div>
                <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/select.svg" alt="" />
                <h1 className='text-3xl font-bold'>Select</h1>
                <p>Select your desired trip <br /> and choose your seats.</p>
            </div>
            <div>
                <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/pay.svg" alt="" />
                <h1 className='text-3xl font-bold'>Pay</h1>
                <p>Pay for the tickets via <br /> Debit / Credit Cards or MFS.</p>
            </div>

        </div>
    );
};

export default Facilities;