import React, { useEffect, useState } from 'react';

const SearchTrainResults = () => {
    const [searchInfo, setSearchInfo] = useState([]);
    //get the to station, from station time etc by useEffect
    useEffect(() => {
        //this all for get the four query params from url
        const url = document.URL;
        const params = url.split('?')[1];
        let paramsArray = params.split('&');
        for (let i = 0; i < paramsArray.length; i++) {
            let pair = paramsArray[i].split('=')[1];
            paramsArray[i] = pair;
        }
        setSearchInfo(paramsArray);
    }, [])

    //now get the train information from server 


    console.log(searchInfo);
    return (
        <div>
            <h1>Search Trains Results</h1>
        </div>
    );
};

export default SearchTrainResults;