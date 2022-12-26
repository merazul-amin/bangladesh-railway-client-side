import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import TotalTicketsAndUser from '../TotalTicketsAndUsers/TotalTicketsAndUser';

const Home = () => {
    return (
        <div className=''>
            <TopBanner></TopBanner>
            <TotalTicketsAndUser></TotalTicketsAndUser>
        </div>
    );
};

export default Home;