import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='shadow-lg bg-white'>
                <div className='lg:w-[90%] mx-auto h-[80px] flex align-middle relative'>
                    {/* two div for logo and nav links */}

                    {/* Left Logo */}
                    <div className='flex lg:w-[30%] mt-2 ml-10 lg:ml-0'>
                        <div>
                            <Link to='/'>  <img className='w-[50px]' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bangladesh-railway.png" alt="" /></Link>
                        </div>
                        <div>
                            <Link to='/'> <h4 className='text-[#DA924E] text-xl font-bold'>Bangladesh <br /> Railway</h4></Link>
                        </div>
                    </div>


                    {/* Navlinks for large display*/}
                    <div className='hidden lg:block lg:w-[70%] mt-5 lg:ml-40 mr-0'>
                        <ul className='lg:flex justify-around w-[90%] align-middle mx-auto text-xl'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/register'>Register</NavLink></li>
                            <li><NavLink to='/'>Train Information</NavLink></li>
                            <li><NavLink to='/'>Contact Us</NavLink></li>
                        </ul>
                    </div>


                    {/* This div is for navigation bar toggle bars.  */}
                    <div className='lg:hidden mt-5 w-[70%] flex justify-end mr-10 text-green-600 select-none'>
                        {
                            isOpen ? <ImCross onClick={() => setIsOpen(false)} className='text-2xl cursor-pointer '></ImCross>
                                :
                                <FiAlignJustify onClick={() => setIsOpen(true)} className='text-3xl cursor-pointer'></FiAlignJustify>
                        }
                    </div>
                </div>
            </div>


            {/* This Navlinks for small display. these navlinks will show in small devices and after clicking the green bar and will be disappeared after clicking the cross sign */}

            <div className={`lg:hidden w-full mt-[80px] absolute ${isOpen ? `top-0` : `top-[-500px]`} duration-500`}>
                <ul className='text-white font-bold '>
                    <li className='bg-green-600 block mb-[1px] p-5'><NavLink to='/'>Home</NavLink></li>
                    <li className='bg-green-600 w-full mb-[1px] p-5'><NavLink to='/login'>Login</NavLink></li>
                    <li className='bg-green-600 w-full mb-[1px] p-5'><NavLink to='/register'>Register</NavLink></li>
                    <li className='bg-green-600 w-full mb-[1px] p-5'><NavLink to='/'>Train Information</NavLink></li>
                    <li className='bg-green-600 w-full mb-[1px] p-5'><NavLink to='/'>Contact Us</NavLink></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;