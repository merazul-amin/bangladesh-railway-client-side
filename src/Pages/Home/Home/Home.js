import React from 'react';
import DisclaimarModal from '../DisclaimarModal/DisclaimarModal';
import Facilities from '../Facilities/Facilities';
import Instructions from '../Instructions/Instructions';
import PaymentLogos from '../PaymentLogos/PaymentLogos';
import TopBanner from '../TopBanner/TopBanner';
import TotalTicketsAndUser from '../TotalTicketsAndUsers/TotalTicketsAndUser';

const Home = () => {
    return (
        <div className=''>
            <DisclaimarModal></DisclaimarModal>
            <TopBanner></TopBanner>
            <TotalTicketsAndUser></TotalTicketsAndUser>
            <Facilities></Facilities>
            <Instructions></Instructions>
            <PaymentLogos></PaymentLogos>
        </div>
    );
};

export default Home;