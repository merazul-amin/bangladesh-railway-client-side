import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes';
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  );
}

export default App;
