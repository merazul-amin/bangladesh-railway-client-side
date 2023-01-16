import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
                        <h1 >Details of Train</h1>
                        {/* Top Time estimate */}
                        <div>
                            {/* Journey Start */}
                            <div>

                            </div>
                            {/* Journey Route */}
                            <div>

                            </div>
                            {/* Journey End */}
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