import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import UserManagement from './pages/UserManagement/UserManagement.jsx';
import SimpleCrud from './pages/SimpleCrud/SimpleCrud.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/usermanagement",
        element: <UserManagement/>
      },
      {
        path: "/simplecrud",
        element: <SimpleCrud/>
      },
      {
        path: "/users",
        element: <Users/>,
        loader: () => fetch('http://localhost:5000/crudusers')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
