import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import DataDisplay from './components/DataDisplay';



function App() {

  const router = createBrowserRouter([
 {path:'/' ,element:<Login/>},
 {
  path:'Signup',element:<Signup/>
 },{
  path:'Home',element:<DataDisplay/>
 }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
