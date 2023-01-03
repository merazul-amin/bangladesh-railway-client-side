import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Instructions = () => {
    return (
        <div className='my-10 lg:flex w-[90%] mx-auto'>
            {/* left Img */}
            <div className='lg:w-[30%] my-10 lg:mt-[140px]'>
                <img src="https://eticket.railway.gov.bd/v2/assets/img/home/instruction-secion-image.png" alt="" />
            </div>

            {/* right text */}
            <div className='lg:w-[70%] lg:ml-9'>
                <h1 className='text-green-800 text-2xl font-bold text-center'>Instructions to Purchase Tickets</h1>
                <div>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill> Tickets can be bought online five days in advance.
                    </p>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill> You can pay for the tickets using mobile financial services: bKash, Nagad, Rocket or debit/credit cards: Mastercard, Visa, DBBL Nexus. Other payment options will be available soon.
                    </p>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill>
                        In case of payment or transaction failure, the deducted amount would be refunded by your bank or MFS provider within 8 business days.
                    </p>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill>
                        In case money has been deducted from your card / mobile wallet but you have not received a ticket confirmation, the deducted amount would be refunded by your bank or MFS provider within 8 business days.
                    </p>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill>
                        If you have not received your ticket copy in email, kindly check your Spam / Junk folder. You can also download your ticket copy from the purchase history of your account after you login.
                    </p>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill>
                        Download the official Rail Sheba app published by Bangladesh Railway from Google Play.
                    </p>
                    <p className='text-green-800 text-xl my-2'>
                        <BsFillArrowRightCircleFill className='inline mr-3 text-3xl'></BsFillArrowRightCircleFill>
                        In case of passengers downloading fake apps or any other app from Google Play which claim to sell train tickets of Bangladesh Railway, the authorities will not take any liability.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Instructions;