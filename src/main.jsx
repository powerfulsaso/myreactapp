import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import UserContextProvider from './contexts/user_context.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <App /> */}
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>

  </React.StrictMode>,


)
