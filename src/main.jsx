import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Routeses/Route';
import Authprovider from './Providers/Authprovider';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='md:w-5/6 mx-auto'> <React.StrictMode>
<Authprovider>
<RouterProvider router={router} />
</Authprovider>
</React.StrictMode>,</div>
)
