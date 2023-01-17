import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ColorRing } from 'react-loader-spinner'
import { LoadingContext } from '../../../contexts/LoadingModalContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LoadingSpinner = () => {
    const { open, setOpen, handleClose, handleOpen } = useContext(LoadingContext);
    return (
        <div>
            <div>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='w-[30%] mx-auto'>
                            <ColorRing
                                visible={true}
                                height="90"
                                width="90"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default LoadingSpinner;