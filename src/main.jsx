import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Users from './Component/Users/Users';
import UserDetails from './Component/UserDetails/UserDetails';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';
import ErrorPage from './Component/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
