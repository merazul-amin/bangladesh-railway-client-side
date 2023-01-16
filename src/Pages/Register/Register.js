import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-2xl my-5'>Registration</h1>
            <hr className='border-green-600 border-2' />
            {/* Register form */}
            <form className='w-[70%] border my-5 shadow-lg rounded-lg p-3'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '500', maxWidth: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" full label="Full Name" variant="outlined" />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" />

                    <br />
                    <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
                    <TextField id="outlined-basic" label="Confirm Mobile" variant="outlined" />
                    <br />
                    <TextField id="outlined-basic" label="Enter Password" variant="outlined" />
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" /><br />
                    <TextField id="outlined-basic" label="Identification Type" variant="outlined" />
                    <TextField id="outlined-basic" label="Identification Number" variant="outlined" /><br />
                    <TextField id="outlined-basic" label="Post Code" variant="outlined" /> <br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={3}
                        fullWidth
                    />

                </Box>
                <button className='btn ml-2 mt-5 px-10 bg-green-800'>Sign Up</button>
                <p className='inline-block text-green-800 font-bold ml-5 text-xl'><Link to={`/login`}>Already Registered?</Link></p>
            </form>
        </div>
    );
};

export default Register;