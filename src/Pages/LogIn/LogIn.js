import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div id='logIn' className='flex h-[100vh] justify-center align-middle bg-gray-300' >
            <div className=''>
                {/* Top Logo */}
                <div className='py-10'>
                    <Link to={`/`}><img className='ml-10' src="https://d19qjkjk65tfln.cloudfront.net/img/login-page-logo.png" alt="" /></Link>
                    <div className='text-center'>
                        <h1 className='text-2xl text-[#DA924E]'>Bangladesh Railway</h1>
                        <p>নিরাপদ, আরামদায়ক, সাশ্রয়ী</p>
                    </div>
                </div>
                {/* Form Here */}
                <div className='bg-white rounded-md '>
                    <div className='py-4 px-2 shadow-lg flex justify-between'>
                        <p className='text-[#DA924E]'> <Link>Forgot Password?</Link></p>
                        <p><Link>Need Help?</Link></p>
                    </div>
                    <form className='p-4'>
                        <TextField size='small' id="outlined-basic" sx={{ my: '15px' }} label="Your Mobile Number" variant="outlined" /><br />
                        <TextField type="password" size='small' id="outlined-basic" label="Your Password" variant="outlined" /> <br />
                        <button className='btn btn-sm w-full bg-green-800 mt-5'>LOGIN</button>
                        <div className='text-center'>
                            <p className='text-gray-200'>or</p>
                            <Link className='text-green-700 underline font-bold' to={`/register`}>Register</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div >

    );
};

export default LogIn;