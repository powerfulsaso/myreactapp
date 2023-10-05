import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import UserContextProvider from './contexts/user_context.jsx';
import ErrorPage from './components/error_page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <UserContextProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </UserContextProvider>

  </React.StrictMode>,


);

