import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GiSquare } from "react-icons/gi";
import route from '../../../../Assets/route.png';

const TrainDetailsAccordian = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div >
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        sx={{ border: '' }}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <h1 className='text-orange-400 uppercase text-xl font-bold'>
                                Train Name and code

                            </h1>
                        </Typography>
                        {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ marginTop: '2px', borderTop: '1px solid gray' }}
                    >

                        {/* Top Time estimate */}
                        <div className='flex'>
                            <div className='flex align-middle w-[90%] py-5'>
                                {/* Journey Start */}
                                <div>
                                    <p>18 Jan, 07:45 am</p>
                                    <p>Dhaka</p>
                                </div>
                                {/* Journey Route */}
                                <div className='w-[60%] mt-3 mx-2 relative'>
                                    {/* <hr className='border-2 inline-block w-[45%]' />
                                    <GiSquare className='inline bg-white left-1/2'></GiSquare>
                                    <hr className='border-2 inline-block w-[45%]' /> */}
                                    <img src={route} alt="" />

                                </div>
                                {/* Journey End */}
                                <div>
                                    <p>18 Jan, 11:45 am</p>
                                    <p>Dhaka</p>
                                </div>
                            </div>
                            {/* Details of this train */}
                            <div className='py-8'>
                                <svg className='ml-5' width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 7.99999H2L0 5.99999L2 3.99999H8V0.99999L9 0L10 0.99999V1.99999L16 2L18 4L16 5.99999H10V7.99999H16L18 9.99999L16 12H10V18C11.1046 18 12 18.8954 12 20H6C6 18.8954 6.89543 18 8 18V7.99999Z" fill="#DA924E"></path>
                                </svg>
                                <p className='text-xs'>Train Details</p>
                            </div>
                        </div>
                        {/* Bottom tickets name */}
                        <div>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div >
    );
};

export default TrainDetailsAccordian;