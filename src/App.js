import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes';
// Your App.tsx file
import 'react-day-picker/dist/style.css';
function App() {
  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  );
}

export default App;
