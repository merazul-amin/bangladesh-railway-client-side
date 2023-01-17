import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ThreeDots } from 'react-loader-spinner'
import { LoadingContext } from '../../../contexts/LoadingModalContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
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
                            <ThreeDots
                                height="500"
                                width="500"
                                radius="9"
                                color="#4fa94d"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default LoadingSpinner;