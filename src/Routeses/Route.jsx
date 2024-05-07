import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutsa/Main";
import Home from "../Pagess/Home/Home";
import Login from "../Pagess/Home/Login/Login";
import Signup from "../Pagess/Home/Login/Signup/Signup";
import Checkout from "../Pagess/Home/Checkout/Checkout";
import BookServices from "../Pagess/Book/BookServices";
import Bookings from "../Pagess/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
         element: <Home></Home>,
  

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:"/book/:id",
          element:<PrivateRoute><BookServices></BookServices></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
        ,
        {
          path:"/bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;