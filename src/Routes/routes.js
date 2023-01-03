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
                path: '/',
                element: <SearchTrainResults></SearchTrainResults>,
                loader: ({ }) => {

                }
            }
        ]
    },
]);


// to = {`/searchTrainsResults/search?fromCity=${fromStation}&toCity=${toStation}&doj=${selectedDate}&class=${classOfChair}`}
export default routes;