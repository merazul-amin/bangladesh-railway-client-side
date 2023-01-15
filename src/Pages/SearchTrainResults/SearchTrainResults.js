import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LoadingContext } from '../../contexts/LoadingModalContext';
import TopSearchInfo from './TopSearchInfo/TopSearchInfo';

const SearchTrainResults = () => {
    const { open, setOpen, handleClose, handleOpen } = useContext(LoadingContext);

    handleClose();
    const trainInfo = useLoaderData();

    console.log(trainInfo);
    return (
        <div>
            <TopSearchInfo from={trainInfo.from} to={trainInfo.to} date={trainInfo.doj}></TopSearchInfo>
        </div>
    );
};

export default SearchTrainResults;