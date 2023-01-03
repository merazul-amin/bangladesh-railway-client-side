import React from 'react';
import Facilities from '../Facilities/Facilities';
import Instructions from '../Instructions/Instructions';
import TopBanner from '../TopBanner/TopBanner';
import TotalTicketsAndUser from '../TotalTicketsAndUsers/TotalTicketsAndUser';

const Home = () => {
    return (
        <div className=''>
            <TopBanner></TopBanner>
            <TotalTicketsAndUser></TotalTicketsAndUser>
            <Facilities></Facilities>
            <Instructions></Instructions>
        </div>
    );
};

export default Home;