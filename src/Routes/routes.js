import { useState } from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SearchTrainResults from "../Pages/SearchTrainResults/SearchTrainResults";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: `/searchTrainsResults/search`,
                element: <SearchTrainResults></SearchTrainResults>,
                loader: (hi) => {
                    //this all for get the four query params from url
                    const url = hi.request.url
                    const params = url.split('?')[1];
                    let paramsArray = params.split('&');
                    for (let i = 0; i < paramsArray.length; i++) {
                        let pair = paramsArray[i].split('=')[1];
                        paramsArray[i] = pair;
                    }
                    return fetch(`https://railway-server-side.vercel.app/searchTrainsResults/search?from=${paramsArray[0]}&to=${paramsArray[1]}&doj=${paramsArray[2]}&class=${paramsArray[3]}`)
                }
            }

        ]
    },
]);


export default routes;