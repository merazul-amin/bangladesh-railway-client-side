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
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Train Name and code
                        </Typography>
                        {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                    </AccordionSummary>

                    <AccordionDetails>
                        <h1>Details of Train</h1>
                        {/* Top Time estimate */}
                        <div>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default TrainDetailsAccordian;