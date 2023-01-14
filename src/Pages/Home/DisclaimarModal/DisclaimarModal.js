import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineInfoCircle } from "react-icons/ai";

const DisclaimarModal = () => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        // if (
        //     event &&
        //     event.type === 'keydown' &&
        //     (event.key === 'Tab' || event.key === 'Shift')
        // ) {
        //     return;
        // }

        setState({ ...state, [anchor]: open });
    };


    useEffect(() => {
        setTimeout(() => {
            toggleDrawer('bottom', true)
            console.log('Hello');
        }, 2000);;
    }, [])

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"

            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='w-[90%] mx-auto py-10'>
                <p>
                    <AiOutlineInfoCircle className='bg-orange-400 text-xl rounded-full inline'></AiOutlineInfoCircle><span className='text-xl font-bold'> Disclaimer</span>
                </p>
                <div className='lg:flex align-middle'>
                    <p className='lg:w-[80%] text-justify'>
                        In case of any concerns or grievance against tickets purchased through the e-ticket website or Rail Sheba app, a passenger should notify Bangladesh Railway within 2 hours by sending an email along with the e-ticket details to support@eticket.railway.gov.bd.

                        For any other grievance including tickets purchased from counters or any sort of inconvenience caused at stations or trains during their travel, passengers are requested to raise their complaints to Bangladesh Railway through the concerned Guard. Any such complaint must be supported by the corresponding tickets. Such grievances will be strictly regulated by Bangladesh Railways Act, 1890 (Act IX of 1890) and.
                        I acknowledge that I have fully read, understand and agree to the
                        of eticket.railway.gov.bd website.
                    </p>
                    <Button onClick={toggleDrawer(anchor, false)} sx={{ mt: '50px', ml: '30px' }} className='block lg:mt-[50px] lg:w-[15%] h-[50px]' variant="contained" color="success">
                        Agree
                    </Button>
                </div>
            </div>
        </Box >
    );


    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, true)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default DisclaimarModal;