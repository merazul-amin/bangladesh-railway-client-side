import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes';
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <>
      <div className='max-w-[1400px] mx-auto'>
        <RouterProvider router={routes}>

        </RouterProvider>
      </div>
    </>
  );
}

export default App;
